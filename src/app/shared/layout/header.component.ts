import { Component, OnInit } from '@angular/core';

import { User, UserService } from '@app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(
        private userService: UserService
    ) { }

    currentUser: User;
    isAuthenticated: Boolean;

    ngOnInit(): void {
        this.userService.currentUser.subscribe(
            (userData) => {
                this.currentUser = userData;
            }
        );

        this.userService.isAuth.subscribe(
            (authentication) => {
                this.isAuthenticated = authentication;
            }
        );
    }

}
