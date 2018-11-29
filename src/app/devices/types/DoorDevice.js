import React from 'react'

const styles = {
    thumb: {
        display: 'flex'
    },
    img: {
        height: '45px'
    }
}

const render = ({device, open, close, classes}) => {

    return (
        <div>
            <div style={styles.thumb}>
                <img style={styles.img} src="images/iot-house.png" />
            </div>
            <h3>{device.meta.title}</h3>
            <pre>
                {JSON.stringify(device, null, 2)}
            </pre>

            <div>
                <button onClick={open(device)}>Open</button>
                <button onClick={close(device)}>Close</button>
            </div>
        </div>
    )
}

export const DoorDevice = render