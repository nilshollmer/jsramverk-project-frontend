import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors, UserService } from '@app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./auth.component.css']
})
export class LoginComponent implements OnInit {
    @Input()
    email: string;
    password: string;
    errors: Errors = {errors: {}};

    constructor(
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
    }

    submitLoginForm() {
        const credentials = { email: this.email, password: this.password};
        this.errors = {errors: {}};
        this.userService.authenticateUser('login', credentials)
        .subscribe(
            (data) => this.router.navigateByUrl('/'),
            (err) => {
                this.errors = err;
                console.log(err);
            }
        )
    }
}
