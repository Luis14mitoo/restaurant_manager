import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import Client from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class BbddService {

  API_URI = 'http://localhost:8080/restaurant';
  constructor(private http:HttpClient   
     ) { }

     getHelloS(){   
      return this.http.get(`${this.API_URI}/helloClientes`);
    }
  
    getClients(){   
      return this.http.get(`${this.API_URI}/list_client`);
    }
  
    getClient(id:number){   
      return this.http.get(`${this.API_URI}/client_id/${id}`);
    }
  
  
    postClient(client:Client){   
      return this.http.post(`${this.API_URI}/save_client`,client);
    }
  
  
    deleteClient(id:number){   
      return this.http.delete(`${this.API_URI}/delete_client/${id}`);
    }

}
