const axios = require('axios')


export const ProjectionsService = (host) => {
    return {
        devices: () => axios.get(host + "/devices"),
        events: (device_id) => axios.get(`${host}/devices/${device_id}/events`)
    }
}
