import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ciberseguridad',
  standalone: true,
  imports: [],
  templateUrl: './ciberseguridad.component.html',
  styleUrls: ['./ciberseguridad.component.scss']
})
export class CiberseguridadComponent implements OnInit, OnDestroy {
  
  

  constructor(private router: Router,private authService: AuthService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    
    // Suscribirse a los cambios de navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Filtrar eventos de tipo NavigationEnd
    ).subscribe(() => {
      // Aquí puedes ejecutar el código que deseas cada vez que se navega a esta ruta
      console.log('Ciberseguridad Component Re-loaded');
    });
  }

  ngOnDestroy(): void {
    // Para limpiar la suscripción cuando el componente se destruye
    this.router.events.subscribe();
    
  }
 

}
