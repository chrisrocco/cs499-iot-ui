const axios = require('axios')


export interface IProjectionsService {
    devices: () => Promise<any>
    events: (device_id: string) => Promise<any>
}


export const ProjectionsService = (host): IProjectionsService => {
    return {
        devices: () => axios.get(host + "/devices"),
        events: (device_id) => axios.get(`${host}/devices/${device_id}/events`)
    }
}
