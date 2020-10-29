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

    private isAuthSubject = new ReplaySubject<boolean>(1);
    public isAuth = this.isAuthSubject.asObservable();
    constructor(
        private jwtService: JwtService,
        private http: HttpClient,
        private apiService: ApiService
    ) { }

    instantiate() {
        if (this.jwtService.getToken()) {
            let user = this.getUser();
            this.apiService.get('/user/' + user)
                .subscribe(
                    (data) => {
                        this.setAuth(data['data']);
                    },
                    (err) => {
                        this.destroyAuth();
                    }
                )
        } else {
            this.destroyAuth();
        }
    }

    getCurrentUser(): User {
        return this.currentUserSubject.value;
    }

    setAuth(user: User) {
        this.jwtService.setToken(user.token);
        this.currentUserSubject.next(user);
        this.setUser(user.username);
        this.isAuthSubject.next(true);
    }

    authenticateUser(route, credentials): Observable<User> {
        return this.apiService.post('/auth/' + route, credentials)
            .pipe(map(
                response => {
                    this.setAuth(response.data.user);
                    return response.data;
                }
            ));
    }

    destroyAuth() {
        this.jwtService.destroyToken();
        this.currentUserSubject.next({} as User);
        this.isAuthSubject.next(false);
        this.destroyUser();
    }

    getUser(): String {
        return window.localStorage['username'];
    }

    setUser(username: String) {
        window.localStorage['username'] = username;
    }

    destroyUser() {
        window.localStorage.removeItem('username');
    }

    updateUserData() {
        this.apiService.get('/user/' + this.getUser())
            .subscribe(
                (data) => {
                    this.currentUserSubject.next(data["data"]);
                }
            )
    }

    addBalance(value) {
        let user = this.getCurrentUser().username;
        let currentbalance = this.getCurrentUser().balance;
        return this.apiService.put('/user/' + user + '/balance', { balance: currentbalance + value })
            .subscribe(data => {
                this.updateUserData();
            })
    }

    editBalance(type, value) {
        let user = this.getCurrentUser().username;
        let currentbalance = this.getCurrentUser().balance;
        let new_balance = 0;

        if (type == "add") {
            new_balance = currentbalance + value;
        } else {
            new_balance = currentbalance - value;
        }
        return this.apiService.put('/user/' + user + '/balance', { balance: new_balance })
            .subscribe(data => {
                this.updateUserData();
            })
    }
}
