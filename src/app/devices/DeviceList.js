import React from 'react'
import {Device} from "./Device";


const styles = {
    root: {
        padding: '20px',
        display: "flex",
        flexWrap: "wrap"
    }
}

let render = ({devices, ctrl}) => {
    if (!devices) return null
    return (
        <div style={styles.root}>
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

export const DeviceList = render