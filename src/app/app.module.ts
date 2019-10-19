import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AddProyectoComponent } from './components/add-proyecto/add-proyecto.component';
import { ListProyectoComponent } from './components/list-proyecto/list-proyecto.component';
import { EditProyectoComponent } from './components/edit-proyecto/edit-proyecto.component';
import { NavComponent } from './components/nav/nav.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AddProyectoComponent,
    ListProyectoComponent,
    EditProyectoComponent,
    NavComponent,
    CarrouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    //HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
