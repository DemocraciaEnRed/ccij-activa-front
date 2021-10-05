import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const axios_ = require('axios');


@Injectable()
export class AxiosService {

  private apiUrl = environment.api;

  constructor() { }
  
  
  public post( query) : Promise<any> {
    return axios_.post(this.apiUrl, {query: query})
      .then((res) => {
        console.log('----------  Campaigns -------------')
        console.log(res.data)
         return res.data
      })
      .catch((error) => {
        console.error('AxiosServices error: ',error)
      });
      }
}