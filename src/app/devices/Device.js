import * as React from 'react'
import {DoorDevice} from "./types/DoorDevice"
import {LightDevice} from "./types/LightDevice"
import {AnyDevice} from "./types/AnyDevice";


const styles = {
    wrapper: {
        margin: '10px',
        width: '200px',
        textAlign: 'left'
    }
}


/**
 * TODO - add a 'type' attribute to the device state in backend
 */
const render = (props) => {
    let {device} = props

    let inner = <AnyDevice {...props} />

    if(device.meta.title.indexOf('Door') > 0)
        inner = <DoorDevice {...props} />

    if(device.meta.title.indexOf('Light') > 0)
        inner = <LightDevice {...props} />

    return (
        <div style={styles.wrapper}>{inner}</div>
    )
}

export const Device = render