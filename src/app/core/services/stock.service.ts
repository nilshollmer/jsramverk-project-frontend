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

    // updateStockValue(type, currency, value) {
    //     let new_value = value;
    //
    //     if (type == "add") {
    //         new_value = value + 1;
    //     } else {
    //         new_value = value - 1;
    //     }
    //     console.log(value);
    //     console.log(new_value);
    //     return this.apiService.put('/market/product', {product: currency, sell_value: new_value})
    //         .subscribe(data => {
    //             return data;
    //         })
    // }
}
