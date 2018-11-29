import {Subject} from 'rxjs'
import {map, tap} from "rxjs/operators"

// export interface UpdateEvent {
//     id: string
//     key: string
//     payload: any
// }

export const WebSocketService = (host) => {

    // Messages stream
    const messages$ = new Subject()

    // WebSocket stream adapter
    const socket = new WebSocket(host)
    socket.addEventListener('message', msg => messages$.next(msg))

    // Downstream
    const events$ = messages$.pipe(
        map(msg => msg.data),
        map(JSON.parse)
    )

    // Module Exports
    return {
        events$,
        send: (data) => socket.send(JSON.stringify(data))
    }
}
