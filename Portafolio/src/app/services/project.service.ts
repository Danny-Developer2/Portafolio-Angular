// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private storageKey = 'projects';

  constructor() {}

  // Obtener todos los proyectos
  getProjects(): Project[] {
    const storedProjects = localStorage.getItem(this.storageKey);
    return storedProjects ? JSON.parse(storedProjects) : [];
  }

  // Guardar un nuevo proyecto
  addProject(project: Project): void {
    const projects = this.getProjects();
    projects.push(project);
    localStorage.setItem(this.storageKey, JSON.stringify(projects));
  }
}
