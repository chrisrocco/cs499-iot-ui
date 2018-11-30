import {ProjectionsService} from "./projections.service";
import {WebSocketService} from "./ws.service";
import {Observable, Subject} from "rxjs";
import {DeviceService, IDeviceService} from "./devices.service";
import {scan} from "rxjs/operators";


export const reducer = (state, event) => {

    if (event.key === 'updated') {
        let id = event.id
        state[id] = event.payload
    }

    if (event.key === 'device-list') {
        let devices = event.data
        devices.forEach(device => {
            state[device.id] = device
        })
    }

    return state
}


export interface IDevicesModule {
    state$: Observable<any>
    controller: IDeviceService
}


export const DevicesModule = (config): IDevicesModule => {

    // Module State
    const events = new Subject()
    const state$ = events.pipe(scan(reducer, {}))

    // Module Services
    const wsService = WebSocketService(config.services.ws)
    const projService = ProjectionsService(config.services.projections)
    const deviceService = DeviceService(config)

    wsService.events$
        .subscribe(events)

    projService.devices()
        .then(res => res.data.devices)
        .then(devices => ({key: 'device-list', data: devices}))
        .then(event => events.next(event))

    return {
        state$,
        controller: deviceService
    }
}