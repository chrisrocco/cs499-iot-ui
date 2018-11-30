import {IDevicesModule} from "../devices/devices.module";
import {map} from "rxjs/operators";

declare let Object: any


export const HomeModule = (devicesModule: IDevicesModule) => {

    const state$ = devicesModule.state$.pipe(
        map(data => {
            let devices = Object.values(data)

            let water = 0
            let power = 0

            devices.forEach(device => {
                let state = device.state.projected.usage
                water += state.water
                power += state.power
            })

            return {
                water,
                power
            }
        })
    )


    return {
        state$
    }

}
