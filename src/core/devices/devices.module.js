import {ProjectionsService} from "./projections.service";
import {map, tap} from "rxjs/operators";
import {WebSocketService} from "./ws.service";
import {Subject} from "rxjs";
import {DeviceService} from "./devices.service";


export const deviceReducer = db => (event) => {

    if (event.key === 'updated') {
        let id = event.id
        return db.write(`devices.${id}`, event.payload)
    }

    if (event.key === 'device-list') {
        let devices = event.data
        return devices.forEach(document =>
            db.write(`devices.${document.id}`, document))
    }
}


export const DevicesModule = (config, db) => {

    const events = new Subject()

    const wsService = WebSocketService(config.services.ws)
    const projService = ProjectionsService(config.services.projections)
    const deviceService = DeviceService(config)

    wsService.events$
        .subscribe(events)

    projService.devices()
        .then(res => res.data.devices)
        .then(devices => ({key: 'device-list', data: devices}))
        .then(event => events.next(event))

    events.subscribe(deviceReducer(db))

    return {
        controller: deviceService
    }
}