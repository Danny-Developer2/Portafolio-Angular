import { Routes } from '@angular/router';
import { CiberseguridadComponent } from './ciberseguridad/ciberseguridad.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RoleGuard } from './services/role.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

export const routes: Routes = [
    {path: 'ciberseguridad', component: CiberseguridadComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto' , component: ContactoComponent},
    {path: 'sobre-mi', component: SobreMiComponent}, 
    {path: 'proyectos', component: ProyectosComponent},  // Redireccionar al home por defecto
    {path: 'login-admin', component: LoginAdminComponent},
    {
        path: 'unauthorized',
        component: UnauthorizedComponent,
      },
      {
        path: 'admin',
        component: DashboardComponent,
        canActivate: [RoleGuard], 
        data: { role: 'admin' },  
      },
    {path: '**', redirectTo: 'home'}
];
