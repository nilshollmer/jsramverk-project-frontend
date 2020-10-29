import { Component, OnInit } from '@angular/core';

import { UserService } from '@app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Fantasy Currency Service';
    
    constructor (
        private userService: UserService
    ) {}

    ngOnInit() {
        this.userService.instantiate();
    }
}
