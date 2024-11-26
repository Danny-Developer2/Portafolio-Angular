import { Component, ChangeDetectorRef, effect } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navar.component.html',
  styleUrl: './navar.component.scss'
})
export class NavarComponent {
  isAuthenticated: boolean = false;
  role: string | null = null;

  constructor(private authService: AuthService, private router: Router, private cdr: ChangeDetectorRef) {
    this.updateAuthStatus();  // Inicializamos el estado de autenticación
    
  }


  ngOninit(): void {
    
    this.updateAuthStatus(); // Inicializamos
  }
  // Llamado para actualizar el estado de autenticación en la barra de navegación
  updateAuthStatus(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.role = this.authService.getUserRole();
    // this.cdr.detectChanges();  // Forzar la detección de cambios
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
    this.updateAuthStatus();  // Actualizar el estado después de hacer logout
  }
}
