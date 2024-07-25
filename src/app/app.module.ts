import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IngresoComponent,
    CreateUserComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
