// src/app/services/project.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:5258/Proyectos';

  

  // Método para obtener proyectos desde la API
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  // Método para agregar un nuevo proyecto
  
  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }

  deleteVehicle(id: number | null | undefined): void {
    if (id !== null && id !== undefined) {
      this.http
        .delete(`${this.apiUrl}/${id}`, { observe: 'response' })
        .subscribe(
          (response) => {
            if (response.status === 200) {
              this.getProjects();
            }
          },
          (error) => {
            console.error('Error deleting vehicle:', error);
            console.error('Error status:', error.status); 
          }
        );
    } else {
      console.error('ID de vehículo no válido');
    }
  }
  getProyectos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
