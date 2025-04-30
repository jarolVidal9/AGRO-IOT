import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }

  logout() {
    console.log('Logout clicked');
    
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
