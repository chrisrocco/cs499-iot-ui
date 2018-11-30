import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css'
import registerServiceWorker from './registerServiceWorker';
import {DevicesModule} from "./core/devices/devices.module";
import * as EventEmitter from 'events'
import {config} from "./config";


/**
 * Composition Root
 * ======================
 */

// Master event bus
const events = new EventEmitter()


// Instantiate Modules
const devices = DevicesModule(config)


// Initialize the application core
const core = {
    events,
    features: {
        devices
    }
}


// Dispatch device commands to server
events.on('devices.command', cmd => {
    console.log(cmd)
    core.features
        .devices
        .controller
        .command(cmd.key, cmd.device_id)
})


ReactDOM.render(
  <App core={core} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
