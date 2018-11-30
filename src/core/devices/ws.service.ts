import {Observable, Subject} from 'rxjs'
import {map} from "rxjs/operators"


export interface IWsService {
    events$: Observable<any>
    send: (data) => void
}


export const WebSocketService = (host): IWsService => {

    // Messages stream
    const messages$ = new Subject<{ data }>()

    // WebSocket stream adapter
    const socket = new WebSocket(host)
    socket.addEventListener('message', msg => messages$.next(msg))

    // Downstream
    const events$ = messages$.pipe(
        map(msg => msg.data),
        map(data => JSON.parse(data))
    )

    // Module Exports
    return {
        events$,
        send: (data) => socket.send(JSON.stringify(data))
    }
}
