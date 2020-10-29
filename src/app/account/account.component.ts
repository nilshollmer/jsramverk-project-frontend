import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService, StockService, DatastreamService } from '@app/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    user: User = {} as User;
    stock: any;
    @Input()
    addGold: number = 1;
    currencies = {
        bells: 0,
        rings: 0,
        pokedollar: 0,
        rupees: 0,
    }


    constructor(
        private userService : UserService,
        private stockService : StockService,
        private router: Router,
        private dsService: DatastreamService
    ) {}

    ngOnInit(): void {
        this.listenForUpdates();
        this.updateUserData();
    }

    updateUserData() {
        Object.assign(this.user, this.userService.getCurrentUser());
        this.stockService.getUserStock(this.user.username)
            .subscribe(data => {
                this.stock = data["data"]
            })
    }

    logout() {
        this.userService.destroyAuth();
        this.router.navigateByUrl('/');
    }

    addBalance() {
        this.userService.editBalance("add", this.addGold);
        this.user.balance += this.addGold;
    }

    listenForUpdates() {
        this.dsService.listen('valueupdate').subscribe(res => {
            this.updateValues(res);
        })
    }

    updateValues(values) {
        Object.keys(this.currencies).forEach(currency => {
            this.currencies[currency] = Math.round(values[currency])
        })
    }

    sellCurrency(id, currency, value) {
        this.stockService.sellCurrency(id, currency, value);
        this.router.navigateByUrl('/account')
        this.updateUserData();
        this.user.balance += value;
    }
}
