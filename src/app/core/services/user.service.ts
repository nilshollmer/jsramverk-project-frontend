import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

import { User } from '@app/core/models';
import { map, distinctUntilChanged} from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class UserService {
    private currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    constructor(
        private jwtService: JwtService,
        private http: HttpClient,
        private apiService: ApiService
    ) { }


    getCurrentUser(): User {
        return this.currentUserSubject.value;
    }
    setAuth(user: User) {
        console.log(user);
        this.jwtService.setToken(user.token);
        this.currentUserSubject.next(user);
    }


    authenticateUser(route, credentials): Observable<User> {
        return this.apiService.post('/auth/' + route, credentials)
            .pipe(map(
                response => {
                    console.log(response.data);
                    this.setAuth(response.data.user);
                    return response.data;
                }
            ));
    }


    destroyAuth() {
        this.jwtService.destroyToken();
        this.currentUserSubject.next({} as User);
    }
}
