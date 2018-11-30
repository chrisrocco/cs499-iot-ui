import * as React from 'react';
import './App.css';

import Thermometer from 'react-thermometer-component';
import {HomeScorecards} from "./scorecards/HomeScorecards";
import {Toolbar} from "./toolbar/Toolbar";
import DeviceList from "./devices/DeviceList";

declare let Object: any


class App extends React.Component<{ core }, { devices }> {

    constructor(props) {
        super(props)
        this.state = {
            devices: [
                {
                    id: '1234',
                    meta: {
                        title: 'Garage Door'
                    },
                    state: {
                        projected: '123',
                        actual: '123'
                    }
                }
            ]
        }
    }

    componentDidMount(): void {
        this.props
            .core
            .features
            .devices
            .state$
            .subscribe(state => {
                this.setState({
                    devices: Object.values(state)
                })
            })
    }

    public render() {
        return (
            <div className="App">

                <Toolbar/>

                <HomeScorecards/>

                <div className="floorplan-row">
                    <div className="floorplan">
                        <img src="images/demo-floormap.jpg"/>
                    </div>
                    <div className="temp-controls">
                        <Thermometer
                            theme="light"
                            value="18"
                            max="100"
                            steps="3"
                            format="°F"
                            size="large"
                            height="400"
                        />
                    </div>
                </div>

                <div>
                    <DeviceList core={this.props.core} devices={this.state.devices}/>
                </div>
            </div>
        );
    }
}

export default App;
