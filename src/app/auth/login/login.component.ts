import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    showPassword = false;

    private loginForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }

    ngOnInit() {
    }

    navigateToRegister(): void {
        this.router.navigateByUrl('auth/register').then(r => {});
    }

    doLogin(): void {
        this.authService.loginWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
            .then(() => {
                return this.router.navigateByUrl('menu');
            }).then((bool) => {
                bool? console.log('Successfully logged in.') : console.log('Login failed.');
        }).catch(err => console.log(err));
    }

    togglePasswordFieldType(): void {
        this.showPassword = !this.showPassword;
    }
}
