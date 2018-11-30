import * as React from 'react'
import {Device} from "./Device";


const command = events =>
    (key, data = {}) =>
        device => () =>
            events.emit('devices.command', {key, device_id: device.id, data})


const styles = {
    root: {
        padding: '20px',
        display: "flex",
        flexWrap: 'wrap'
    }
}


class DeviceList extends React.Component<{core, devices}> {

    ctrl: any

    constructor(props){
        super(props)
        // controller for device components
        let c = command(props.core.events)
        this.ctrl = {
            on: c('on'),
            off: c('off'),
            open: c('open'),
            close: c('close'),
            command: (device, key, data = {}) => {
                props.core.events.emit('devices.command', { device_id: device.id, key, data})
            }
        }
    }

    render() {

        const {devices} = this.props
        const ctrl = this.ctrl

        return (
            <div style={styles.root as any}>
                {devices.map(device => {
                    return (
                        <Device
                            {...ctrl}
                            device={device}
                            key={device.id}/>
                    )
                })}
            </div>
        )
    }
}


export default DeviceList