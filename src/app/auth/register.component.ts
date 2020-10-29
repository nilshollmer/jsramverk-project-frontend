import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors, UserService } from '@app/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./auth.component.css']
})
export class RegisterComponent implements OnInit {
    @Input()
    username: string;
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
        const credentials = { username: this.username, email: this.email, password: this.password};

        this.userService.authenticateUser('register', credentials)
        .subscribe(
            (data) => this.router.navigateByUrl('/'),
            (err) => {
                this.errors = err;
                console.log(err);
            }
        )
    }
}
