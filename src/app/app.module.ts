import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { RouterModule, Routes } from '@angular/router';
const Rutas: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'QuienesSomos', component: QuienesSomosComponent },
  { path: 'Contactos', component: ContactosComponent },
  { path: 'Proyectos', component: ProyectosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesSomosComponent,
    ProyectosComponent,
    ContactosComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(Rutas)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
