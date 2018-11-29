import React from 'react'

const styles = {
    thumb: {
        display: 'flex'
    },
    img: {
        height: '45px'
    }
}

const render = ({device, on, off, classes}) => {

    let _thumb = device.state.actual.on ? 'on' : 'off'

    return (
        <div>
            <div style={styles.thumb}>
                <img style={styles.img} src={`images/light-${_thumb}.png`} />
            </div>
            <h3>{device.meta.title}</h3>
            <pre>
                {JSON.stringify(device, null, 2)}
            </pre>

            <div>
                <button onClick={on(device)}>On</button>
                <button onClick={off(device)}>Off</button>
            </div>
        </div>
    )
}

export const LightDevice = render