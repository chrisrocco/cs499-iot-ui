import React from 'react'
import {BehaviorSubject, Subject} from "rxjs";

const styles = {
    thumb: {
        display: 'flex'
    },
    img: {
        height: '45px'
    }
}


export class CAnyDevice extends React.Component {

    state = { command: '' }

    change = (event) => {
        this.setState({ command: event.target.value })
    }

    render() {
        let {classes, device} = this.props
        return (
            <div>
                <div style={styles.thumb}>
                    <img style={styles.img} src="images/iot-cloud.png" />
                </div>
                <h3>{device.meta.title}</h3>
                <pre>
                {JSON.stringify(device, null, 2)}
            </pre>

                <div>
                    <input value={this.state.command} type="text" onChange={this.change}/>
                    <button onClick={() => console.log(this.state.command)}>Dispatch</button>
                </div>
            </div>
        )
    }
}

export const AnyDevice = CAnyDevice