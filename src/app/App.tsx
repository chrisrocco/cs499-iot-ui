import * as React from 'react';
import './App.css';

import Thermometer from 'react-thermometer-component';
import {HomeScorecards} from "./scorecards/HomeScorecards";
import {Toolbar} from "./toolbar/Toolbar";
import {makeDeviceList} from "./devices/makeDeviceList";

class App extends React.Component<{ core }> {

    public render() {

        const {core} = this.props

        const deviceList = makeDeviceList(core)

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
                    {deviceList}
                </div>
            </div>
        );
    }
}

export default App;
