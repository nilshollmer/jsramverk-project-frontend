import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { UserService } from './user.service';
import { map, distinctUntilChanged} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {

    constructor(
        private apiService: ApiService,
        private userService: UserService,
    ) { }

    getUserStock(user) {
        return this.apiService.get('/user/' + user + "/stock");
    }

    sellCurrency(id, currency, value) {
        return this.apiService.post('/user/stock/sell', { id: id})
            .subscribe(data => {
                this.userService.editBalance("add", value);
                // this.updateStockValue("remove", currency, value);
                return data;
            })
    }

    buyCurrency(currency, value) {
        let user = this.userService.getUser();
        return this.apiService.post('/user/stock/buy', { user: user, product: currency})
            .subscribe(data => {
                this.userService.editBalance("remove", value);
                // this.updateStockValue("add", currency, value);
                return data;
            })
    }
}
