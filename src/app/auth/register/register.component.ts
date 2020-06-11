import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators, ValidationErrors} from '@angular/forms';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';

// Authentication Forms Custom Validators
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent || !control) {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if (!password || !passwordConfirm) {
        return null;
    }

    if (passwordConfirm.value === '') {
        return null;
    }

    if (password.value === passwordConfirm.value) {
        return null;
    }

    return {passwordsNotMatching: true};
};

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

    showPassword = false;

    private registerForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.min(8), Validators.required]),
        passwordConfirm: new FormControl('', [Validators.min(8), Validators.required, confirmPasswordValidator])
    });

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    doRegister(): void {
        this.authService.registerWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password)
            .then((response) => {
                return response !== null ? this.router.navigateByUrl('menu') : false;
            })
            .then((bool) => {
                bool ? console.log('Successfully registered and logged in.') : console.log('Login failed.');
            }).catch(err => console.log(err));
    }

    ngOnInit(): void {
    }

    togglePasswordFieldType(): void {
        this.showPassword = !this.showPassword;
    }

}
