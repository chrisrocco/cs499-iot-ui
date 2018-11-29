const axios = require('axios')


export const DeviceService = (config) => {

    const command = (key, device_id, data = {}) => {
        return axios.post(config.services.nodeRed + '/device-commands', {
            "aggregate_id": device_id,
            "key": key,
            "data": data
        })
    }

    return {
        command
    }
}