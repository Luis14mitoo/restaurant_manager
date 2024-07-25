import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { IndexComponent } from './index/index.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import {ClientesComponent} from './clientes/clientes/clientes.component';



const routes: Routes = [
{
  path:'',
  redirectTo: 'clients',
  pathMatch: 'full'
},
{
  path:'index',
  component: IndexComponent
},
{
  path:'create-user',
  component: CreateUserComponent
},
{
  path:'clients',
  component: ClientesComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
