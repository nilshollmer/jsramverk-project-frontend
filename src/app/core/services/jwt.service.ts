import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

    getToken(): String {
        return window.localStorage['jwttoken'];
    }

    setToken(token: String) {
        window.localStorage['jwttoken'] = token;
    }

    destroyToken() {
        window.localStorage.removeItem('jwttoken');
    }
}
