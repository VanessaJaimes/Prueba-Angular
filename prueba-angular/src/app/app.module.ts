import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';

import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { EditarComponent } from './components/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NuevoComponent,
    EditarComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
