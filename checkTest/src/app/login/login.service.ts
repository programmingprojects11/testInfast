import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Teachers } from '../shared/models/teachers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient) { }

  login(teachers:Teachers){
    return this.http.post(environment.baseRoute + 'login',teachers);
  }
}