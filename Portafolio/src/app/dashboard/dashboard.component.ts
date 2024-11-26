// src/app/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent {
  projects: Project[] = [];
  projectName: string = '';
  projectDescription: string = '';
  projectStartDate: string = '';
  repositoryName: string = '';

  constructor(private projectService: ProjectService) {
    this.loadProjects();
  }

  // Cargar proyectos al iniciar el componente
  loadProjects(): void {
    this.projects = this.projectService.getProjects();
  }

  // Función para agregar un nuevo proyecto
  addProject(): void {
    const newProject: Project = {
      name: this.projectName,
      description: this.projectDescription,
      startDate: this.projectStartDate,
      repository:this.repositoryName
    };

    // Usar el servicio para agregar el proyecto
    this.projectService.addProject(newProject);

    // Limpiar el formulario
    this.projectName = '';
    this.projectDescription = '';
    this.projectStartDate = '';
    this.repositoryName = '';

    // Recargar la lista de proyectos
    this.loadProjects();
  }
}
