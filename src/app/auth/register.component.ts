import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '@app/core';

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

    constructor(
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
    }

    submitLoginForm() {
        const credentials = { username: this.username, email: this.email, password: this.password};

        this.userService.authenticateUser('login', credentials)
        .subscribe(
            (data) => this.router.navigateByUrl('/'),
            (err) => {
                console.log(err);
                // this.errors = err;
            }
        )
    }
}
