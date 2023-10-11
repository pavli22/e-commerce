import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const _route = inject(Router);
  if (localStorage.getItem('userToken')) {
    return true;
  }
  else {
    _route.navigate(['/login']);
    return false
  }
};
