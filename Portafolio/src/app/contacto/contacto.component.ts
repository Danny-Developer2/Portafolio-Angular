import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient
import { Observable } from 'rxjs'; // Para trabajar con observables

@Component({
    selector: 'app-contacto',
    imports: [ReactiveFormsModule], // Importamos el módulo necesario para formularios reactivos
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Inicializamos el formulario con FormBuilder
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required], // First name, campo requerido
      apellido: ['', Validators.required], // Last name, campo requerido
      emailAddress: ['', [Validators.required, Validators.email]], // Email, con validación de correo
      numeroTelefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Phone number, validación de 10 dígitos
      subject: ['', Validators.required], // Subject
      mensaje: ['', Validators.required] // Mensaje
    });
  }

  onSubmit() {
    console.log('Formulario enviado');
    if (this.contactoForm.valid) {
      const formData = this.contactoForm.value; 
      this.enviarCorreo(formData).subscribe({
        next: (response) => {
          console.log('Correo enviado exitosamente:', response);
          alert('Correo enviado exitosamente!');
          this.contactoForm.reset();

          
        },
        error: (error) => {
          console.error('Error al enviar correo:', error);
          alert('Hubo un error al enviar el correo');
        }
      });
    } else {
      console.log("Formulario no válido");
      alert('Por favor, completa todos los campos del formulario');
    }
  }

  resetForm() {
    this.contactoForm.reset(); // Resetea los valores del formulario
  }

  // Método para enviar los datos del formulario al backend
  enviarCorreo(formData: any): Observable<any> {
    const url = 'http://localhost:5258/Email/send'; // URL de la API
    return this.http.post(url, formData); // Enviar los datos usando POST
  }
}
