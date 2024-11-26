import { Routes } from '@angular/router';
import { CiberseguridadComponent } from './ciberseguridad/ciberseguridad.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

export const routes: Routes = [
    {path: 'ciberseguridad', component: CiberseguridadComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto' , component: ContactoComponent},
    {path: 'sobre-mi', component: SobreMiComponent}, 
    {path: '**', redirectTo: 'home'}
];
