import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators  } from '@angular/forms';

import User from '../../interfaces/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  public user: FormGroup;

 

  constructor(   
  ){this.user = this.createFormGroup();}


  createFormGroup(){
    return new FormGroup({  
      email: new FormControl('',[Validators.required,Validators.email]),
      phone: new FormControl('',[Validators.required,Validators.pattern('^[0-9 ]{10,10}')]),
      password: new FormControl('',[Validators.required]),
      rol: new FormControl('',[Validators.required])
    })
  }

  save(user: FormGroup){

   let user_nuevo:User = {
      email:user.get('email')?.value,
      phone:user.get('phone')?.value,
      password:user.get('password')?.value,
      rol:user.get('rol')?.value
      };

      if(this.user.invalid){
        console.log('Formulario invalido -----------')
      }else{
        console.log('Formulario VALIDO -----------')
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
      console.log(user_nuevo)
      }
      

  }

}
