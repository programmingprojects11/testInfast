import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionService {

  constructor(private http:HttpClient) { }
  getQuestion(){
    return this.http.get(environment.baseRoute+'getQuestion');
  }
}
