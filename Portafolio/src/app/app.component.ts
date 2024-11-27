import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavarComponent } from './navar/navar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavarComponent,FooterComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portafolio';
}
