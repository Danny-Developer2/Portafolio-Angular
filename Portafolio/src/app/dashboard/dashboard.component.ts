// src/app/dashboard/dashboard.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-dashboard',
    imports: [FormsModule, CommonModule], // Agrega HttpClientModule aquí
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];
  projectName: string = '';
  projectDescription: string = '';
  projectStartDate: string = '';
  repositoryName: string = '';
  img: string = '';
  id: number = 0;
  

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
      console.log(this.projects[0])
    });
  }

  addProject(): void {
    const newProject: Project = {
      name: this.projectName,
      description: this.projectDescription,
      startDate: this.projectStartDate,
      repository: this.repositoryName,
      img: this.img,
      id: this.id, 
    };
    console.log(newProject);

    // Usar el servicio para agregar el proyecto
    this.projectService.addProject(newProject).subscribe({
      next: (project) => {
        console.log('Proyecto agregado:', project);
        // Recargar los proyectos después de agregar uno nuevo
        this.loadProjects();
      },
      error: (err) => {
        console.error('Error al agregar el proyecto:', err);
      }
    });

    // Limpiar el formulario
    this.projectName = '';
    this.projectDescription = '';
    this.projectStartDate = '';
    this.repositoryName = '';
    this.img = '';
    this.id = 0;
  }
  deleteActionVehicle(vehicleId: number | null | undefined){ 
    this.projectService.deleteVehicle(vehicleId)
    console.log(`Vehículo eliminado con éxito`);
    window.location.reload();
    // this.router.navigate(['vehicles']);
    
  }
}
