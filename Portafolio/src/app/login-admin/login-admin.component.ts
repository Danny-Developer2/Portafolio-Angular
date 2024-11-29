import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login-admin',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './login-admin.component.html',
    styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent  {
  loginForm: FormGroup;
  loading = false;
  errorMessage = '';
  isAuthenticated: boolean | undefined;
  role: string | null | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef  // Inject ChangeDetectorRef
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOninit(): void {
    
    this.updateAuthStatus(); // Inicializamos
  }
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    

    this.loading = true;
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe((user) => {
      if (user) {
        const role = this.authService.getUserRole();
        if (role === 'admin') {
          this.router.navigate(['/admin']);
          this.updateAuthStatus(); 
        } else if (role === 'user') {
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Unauthorized: Admins only';
          this.router.navigate(['/unauthorized']);
        }
    
        // Manually trigger change detection after login success
        this.cdRef.detectChanges();
      } else {
        this.errorMessage = 'Invalid credentials: Usuario inválido: Verifica el nombre de usuario o contraseña';
        console.log('Usuario inválido: Verifica el nombre de usuario o contraseña');
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      }
    
      this.loading = false;
    });
    
   
  }
  updateAuthStatus(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.role = this.authService.getUserRole();
    // this.cdr.detectChanges();  // Forzar la detección de cambios
  }
    
  
}
