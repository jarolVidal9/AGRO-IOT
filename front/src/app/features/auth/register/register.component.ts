import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = signal(false);
  errorsMessage = signal<{ msg: string, path: string }[]>([]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ){
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['' ,[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.confirmPasswordValidator('password', 'confirmPassword') });
  }
  confirmPasswordValidator(passwordField: string, confirmPasswordField: string): ValidatorFn{
    return (form: AbstractControl): ValidationErrors | null => {
      const password = form.get(passwordField)?.value;
      const confirmPassword = form.get(confirmPasswordField)?.value;
      if (password !== confirmPassword) {
        form.get(confirmPasswordField)?.setErrors({ confirmPasswordMismatch: true });
        return { confirmPasswordMismatch: true };
      } else {
        // Remove error if previously set and now matches
        if (form.get(confirmPasswordField)?.hasError('confirmPasswordMismatch')) {
          form.get(confirmPasswordField)?.setErrors(null);
        }
        return null;
      }
    };
  }
  onSubmit() {
    this.loading.set(true);
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;
      this.authService.register(name, email, password ).subscribe({
        next: (response) => {
          this.loading.set(false);
          this.router.navigate(['/login']);
        },
        error: (error) => { 
          this.loading.set(false);
          if (error.error && error.error.errors) {
            this.errorsMessage.set(error?.error?.errors || []);
          } else {
            this.errorsMessage.set([
              { msg: error.error.message, path: 'global' }
            ]);
          }
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
