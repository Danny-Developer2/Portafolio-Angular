import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule], // Importamos el módulo necesario para formularios reactivos
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario con FormBuilder
    this.contactoForm = this.fb.group({
      fname: ['', Validators.required], // First name, campo requerido
      lname: ['', Validators.required], // Last name, campo requerido
      email: ['', [Validators.required, Validators.email]], // Email, con validación de correo
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Phone number, validación de 10 dígitos
      job: ['', Validators.required], // Job title
      usage: ['', Validators.required] // Uso de la herramienta Flinks
    });
  }

  onSubmit() {
    console.log('funciono')
    if (this.contactoForm.valid) {
      console.log(this.contactoForm.value); // Muestra los valores del formulario si es válido
    } else {
      console.log("Formulario no válido");
    }
  }
  resetForm(){
    this.contactoForm.reset(); // Resetea los valores del formulario
  }
}
