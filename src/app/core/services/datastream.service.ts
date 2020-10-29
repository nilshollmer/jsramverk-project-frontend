import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatastreamService {
    private socket;

    constructor() {
        this.socket = io(`${environment.ws_url}`);
    }

    listen(Eventname: string) {
        return new Observable((subscriber) => {
            this.socket.on(Eventname, data => {
                subscriber.next(data);
            })
        });
    }
}
