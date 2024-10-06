import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token') || '';
  const router = inject(Router);
  const authService = inject(AuthService);

  if (token != '') {
    return authService.validateToken(token).pipe(
      map((data) => {
        if(data.isValid){
          return true
        }else{
          localStorage.removeItem('token')
          router.navigate([''])
          return false
        }
      }),
      catchError(error => {
        console.error(error)
        router.navigate([''])
          return of(false)
      })
    )
  } else {
    router.navigateByUrl('')
    return false;
  }
};
