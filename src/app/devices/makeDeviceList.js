import {map, tap} from "rxjs/operators"
import {Composer} from "../../core/Composer"
import {DeviceList} from "./DeviceList"


let command = events =>
    (key, data = {}) =>
        device => () =>
            events.emit('devices.command', {key, device_id: device.id, data})


export const makeDeviceList = (core) => {
    // stream of device states
    let devices$ =
        core.db.stream('devices')
            .pipe(map(Object.values))

    // controller for device components
    let c = command(core.events)
    let ctrl = {
        on: c('on'),
        off: c('off'),
        open: c('open'),
        close: c('close'),
        command: (cmd, device) => console.log(cmd, device)
    }

    // bundle children
    return [DeviceList]
        .map(Composer.bind({ctrl}))
        .map(Composer.sync(devices$, 'devices'))
        .map(Composer.build)
        .pop()
}