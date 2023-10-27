import { Component } from '@angular/core';
import * as L from 'leaflet';
import { GetObesidadService } from '../app/services/get-obesidad.service';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  MAYOR: any;
  menor:any;
  promedio: any;

  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource:any = [];

  constructor(public getService: GetObesidadService) {}

  title = 'ejercicio3';
  private map: any;
  ngOnInit(): void {
    this.getService.getUser().subscribe({
      next: (a) => {
        console.log(a);
        this.dataSource = a
      },
      error: (e) => {console.log(e)},
    });

    this.getService.mayor().subscribe({
      next: (a) => {
        console.log(a);
        this.MAYOR = a
      },
      error: (e) => {console.log(e)},
    });

    this.getService.menor().subscribe({
      next: (a) => {
        console.log(a);
        this.menor = a
      },
      error: (e) => {console.log(e)},
    });
    
    this.getService.promedio().subscribe({
      next: (a:any) => {
        console.log(a);
        const averageObesity = a.averageObesity;
    this.promedio = averageObesity;
      },
      error: (e) => {console.log(e)},
    });
  }

  ngAfterViewInit(): void {
    // Crea un mapa cuadrado de 400x400 píxeles y centra en Estados Unidos
    const map = L.map('map', {
      center: [37.0902, -95.7129],
      zoom: 4,
      minZoom: 4,
      maxZoom: 6,
      maxBounds: L.latLngBounds([24.396308, -125.000000], [49.384358, -66.934570]),
      maxBoundsViscosity: 1.0
    });
  
    // Añade una capa de mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 6,
    }).addTo(map);
  }
  
}
