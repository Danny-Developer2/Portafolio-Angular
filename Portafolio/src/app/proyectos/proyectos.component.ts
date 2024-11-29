import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-proyectos',
    imports: [CommonModule],
    templateUrl: './proyectos.component.html',
    styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent implements OnInit {
  proyectos: any[] = [];

  constructor(private proyectosService: ProjectService) {}

  ngOnInit(): void {
    this.proyectosService.getProyectos().subscribe(
      (data) => {
        this.proyectos = data; // Guarda los proyectos en la variable
      },
      (error) => {
        console.error('Error al obtener proyectos:', error);
      }
    );
  }

}
