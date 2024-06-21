import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
}) 
  export class DataService {
    private ROOT_URL = ' localhost:3000/api/v1/course'; // Replace with your API URL
  
    constructor(private http: HttpClient) {}
  
    getUserId(username: string, password: string) {
      return this.http.get<number>(
        `${this.ROOT_URL}/verify?username=${username}&password=${password}`
      );
    }
  }

