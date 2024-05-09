import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn = false;

  cartItems = 0;

  goToCart() {
    if (this.isLoggedIn) {
      this.router.navigate(['/shopping-cart']);
    } else {
      alert('To access shopping cart you need to be signed in...');
    }
  }

  constructor(private router: Router) {}
}
