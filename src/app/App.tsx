import * as React from 'react';
import './App.css';

import Thermometer from 'react-thermometer-component';
import {HomeScorecards} from "./scorecards/HomeScorecards";
import {Toolbar} from "./toolbar/Toolbar";
import DeviceList from "./devices/DeviceList";

declare let Object: any


class App extends React.Component<{ core }, { devices, home }> {

    constructor(props) {
        super(props)
        this.state = {
            devices: [],
            home: {}
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
                    devices: state
                })
            })

        this.props
            .core
            .features
            .home
            .state$
            .subscribe(state => {
                this.setState({
                    home: state
                })
            })
    }

    public render() {
        return (
            <div className="App">

                <Toolbar/>

                <HomeScorecards home={this.state.home}/>

                <div className="floorplan-row">
                    <div className="floorplan">
                        <img src="images/demo-floormap.jpg"/>
                    </div>
                    <div className="temp-controls">
                        {this.state.devices['weather_sensor'] ?
                            <Thermometer
                                theme="light"
                                value={this.state.devices['weather_sensor'].state.actual.outdoor_temp}
                                max="100"
                                steps="3"
                                format="°F"
                                size="large"
                                height="400"
                            />
                            :
                            null
                        }
                    </div>
                </div>

                <div>
                    <DeviceList core={this.props.core} devices={Object.values(this.state.devices)}/>
                </div>
            </div>
        );
    }
}

export default App;
