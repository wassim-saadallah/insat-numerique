import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListeFilieresComponent } from './liste-filieres/liste-filieres.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeFilieresComponent,
    EtudiantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
