import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css'
import registerServiceWorker from './registerServiceWorker';
import {DevicesModule} from "./core/devices/devices.module";
import * as EventEmitter from 'events'
import {Database} from "./core/Database";
import {config} from "./config";

declare let window: any

/**
 * Composition Root
 * ======================
 */

// Master event bus
const events = new EventEmitter()


// Instantiate Modules
const db = Database()
window.database = window.db = window.DB = db // Debugging purposes only
const devices = DevicesModule(config, db)


// Initialize the application core
const core = {
    db,
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
