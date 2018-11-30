import * as React from 'react'

const styles = {
    thumb: {
        display: 'flex'
    },
    img: {
        height: '45px'
    }
}


export class CAnyDevice extends React.Component<{ command, device }> {

    state = { command: '' }

    change = (event) => {
        this.setState({ command: event.target.value })
    }

    render() {
        let {device, command} = this.props

        let dispatch = () => command(device, this.state.command)

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
                    <button onClick={dispatch}>Dispatch</button>
                </div>
            </div>
        )
    }
}

export const AnyDevice = CAnyDevice