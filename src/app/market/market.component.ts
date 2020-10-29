import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService, DatastreamService, StockService } from '@app/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

    currentGold: number;

    currencies = {
        bells: 0,
        rings: 0,
        pokedollar: 0,
        rupees: 0,
    }

    constructor(
        private userService : UserService,
        private dsService: DatastreamService,
        private stockService: StockService,
        private router: Router

    ) { }

    ngOnInit() {
        this.listenForUpdates();
        this.updateCurrentGold();
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

    buyCurrency(currency, value) {
        this.stockService.buyCurrency(currency, value)
        this.router.navigateByUrl('/market')
        this.currentGold -= value;
    }

    updateCurrentGold() {
        this.currentGold = this.userService.getCurrentUser().balance;
    }
}
