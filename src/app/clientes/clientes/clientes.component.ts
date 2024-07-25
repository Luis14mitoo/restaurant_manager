import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators  } from '@angular/forms';
import { HttpErrorResponse  } from '@angular/common/http';

import Client from '../../interfaces/client';
import {BbddService} from '../../services/bbdd.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
 
  constructor(  
    private bbddService : BbddService  
  ){this.form_client = this.createFormGroup();}


  public form_client: FormGroup;
  
  private  object_cliente : Client = {
    id: 0,
    email: '',
    identity: 0,
    names: '',
    surnames: '',
    phone:0,
    address: ''
}

  

  createFormGroup(){
    return new FormGroup({ 
      id: new FormControl(), 
      email: new FormControl('',[Validators.required,Validators.email]),
      identity: new FormControl('',[Validators.required,Validators.pattern(`^[0-9]{5,15}`)]),
      names: new FormControl('',[Validators.required,Validators.pattern(`^[a-zA-ZñÑ  ]{3,50}$`)]),
      surnames: new FormControl('',[Validators.required,Validators.pattern(`^[a-zA-ZñÑ ]{3,50}$`)]),
      phone :new FormControl('',[Validators.required,Validators.pattern(`^[0-9]{10,10}`)]),
      address:new FormControl('',[Validators.required,Validators.pattern(`^[a-zA-Z\0-9#-]{9,50}`)])      
    })
  }

  save_client(){    
    if(this.form_client.valid){
                this.object_cliente.id = this.form_client.get('id')?.value;
                this.object_cliente.email = this.form_client.get('email')?.value;
                this.object_cliente.identity = this.form_client.get('identity')?.value;
                this.object_cliente.names = this.form_client.get('names')?.value;
                this.object_cliente.surnames = this.form_client.get('surnames')?.value;
                this.object_cliente.phone = this.form_client.get('phone')?.value;
                this.object_cliente.address = this.form_client.get('address')?.value;                 
      this.create_client_BBDD(this.object_cliente);
    }else{
      alert("El formulario contine datos no validos, o le faltan datos");      
    }
    
  }


  create_client_BBDD(client:Client){     
    
      this.bbddService.postClient(client).subscribe({
        next:(response:Client) => { 
          
          console.log(response)
          this.cancelar()
          alert("Usuario creado correctamente ") 
        
        },
        error: (error:any) => {
          console.log(error)
          alert("No se pudo crear el usuario, Error: "+JSON.stringify(error))      
        }
      });
}


cancelar(){
  
  this.form_client = this.createFormGroup();
}

}
