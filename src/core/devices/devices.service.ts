const axios = require('axios')


export interface IDeviceService {
    command: (key: string, id: string, data?: any) => Promise<any>
}


export const DeviceService = (config): IDeviceService => {
    return {
        command: (key, device_id, data = {}) => {
            return axios.post(config.services.nodeRed + '/device-commands', {
                "aggregate_id": device_id,
                "key": key,
                "data": data
            })
        }
    }
}