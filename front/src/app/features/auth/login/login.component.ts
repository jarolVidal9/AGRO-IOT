import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = signal(false);
  error = signal('');
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    this.loading.set(true);
    this.error.set('');
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response) => {
          this.loading.set(false);
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.loading.set(false);
          this.error.set(error.error.message);
        }
      }
      );
    } else {
      console.error('Form is invalid');
    }
  }

}
