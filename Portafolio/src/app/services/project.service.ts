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
}
