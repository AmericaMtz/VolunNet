import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MapsService } from '../maps.service';
@Component({
  selector: 'mapa-component',
  templateUrl: 'mapa.component.html',
  styleUrls: ['mapa.component.css'],
})
export class MapaComponent {
  lat: string = '';
  lng: string = '';
  location: Object;
  constructor(private map: MapsService){ }
  ngOnInit(){
    this.map.getLocation().subscribe( data => {
      console.log(data);
      console.log("avr");
      this.lat = data.latitude;
      this.lng = data.longitude; 
      
    })
  }
}