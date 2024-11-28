import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ciberseguridad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ciberseguridad.component.html',
  styleUrls: ['./ciberseguridad.component.scss']
})
export class CiberseguridadComponent implements OnInit, OnDestroy {
  achievements: any[] = []; // Propiedad para almacenar los datos del endpoint

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Suscribirse a los cambios de navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Filtrar eventos de tipo NavigationEnd
    ).subscribe(() => {
      console.log('Ciberseguridad Component Re-loaded');
    });

    // Consumir el endpoint
    this.http.get<any[]>('http://localhost:5258/Hackthebox').subscribe({
      next: (data) => {
        this.achievements = data; // Guardar la respuesta en achievements
      },
      error: (err) => {
        console.error('Error al obtener los datos', err);
      }
    });
  }

  ngOnDestroy(): void {
    // Para limpiar la suscripción cuando el componente se destruye
    this.router.events.subscribe();
  }
}
