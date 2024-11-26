import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Datos simulados de usuarios
  private users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' },
  ];

  constructor() {}

  // Verificar si el código se ejecuta en el navegador
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  login(username: string, password: string): Observable<any> {
    // Buscar el usuario en los datos simulados
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    // Si el usuario es encontrado, almacenamos los datos en localStorage
    if (user) {
      if (this.isBrowser()) {
        localStorage.setItem('user', JSON.stringify(user)); // Almacena los datos del usuario
      }
      return of(user); // Simulamos una respuesta exitosa
    } else {
      return of(null); // Si no se encuentra el usuario, retornamos null
    }
  }

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    if (this.isBrowser()) {
      return localStorage.getItem('user') !== null;
    }
    return false; // Retorna false si el entorno no es navegador
  }

  // Obtener el rol del usuario actual
  getUserRole(): string | null {
    if (this.isBrowser()) {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user).role : null; // Regresa el rol si el usuario está en localStorage
    }
    return null; // Si no estamos en el navegador, no hay rol
  }

  // Método para cerrar sesión (limpiar localStorage)
  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('user');
    }
  }
}
