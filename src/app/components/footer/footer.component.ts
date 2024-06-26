import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from 'src/app/app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public anios: string = '';
  public anio: string = '';
  cv = GlobalVariables.cv;
  wspNumer = GlobalVariables.wspNumer;

  constructor() { }

  ngOnInit(): void {
    this.Año();
    this.anios = this.calcularEdad('10/10/1993');
  }

  private calcularEdad(fechaNacimiento: string): string {
    try {
      const fechaNacimientoDate = new Date(fechaNacimiento);
      const edadEnMilisegundos = new Date().getTime() - fechaNacimientoDate.getTime();
      const edadEnAnios = edadEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25); // milisegundosEnUnAnio, considerando años bisiestos
      return Math.floor(edadEnAnios).toString();
    } catch (error) {
      console.log(error);
      return '--';
    }
  }

  private Año() {
    try {
      this.anio = new Date().getFullYear().toString();
    } catch (error) {
      console.log(error);
    }
  }
}
