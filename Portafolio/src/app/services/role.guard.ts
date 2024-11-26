import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated()) {
      const requiredRole = route.data['role'];
      if (this.authService.getUserRole() === requiredRole) {
        return true;
      } else {
        // Si el rol no coincide, redirige al usuario a una página de error o inicio
        this.router.navigate(['/unauthorized']);
        return false;
      }
    } else {
      // Si no está autenticado, redirige al login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
