import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const redirectGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token && !istokenExpired(token)) {
    router.navigate(['/']);
    return false;
  }

  return true;
};

function istokenExpired(token: string): boolean {
  try{
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expirationDate = new Date(payload.exp * 1000);
    return expirationDate < new Date();
  }catch (error) {
    console.error('Error decoding token:', error);
    return true; // If there's an error, assume the token is expired
  }
}