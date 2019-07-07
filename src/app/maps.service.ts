import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { from } from 'rxjs';
interface Location{
  latitude: string;
  longitude: string;
}
@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) {} 
    getLocation() {
      return this.http.get<Location>('http://api.ipapi.com/170.225.9.146?access_key=9b8c57c005992a8f41da493b3e4cce03&format=1')
    
  }
}
