import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public anios: string = '';

  constructor() { }

  ngOnInit(): void {
    this.anios = this.calcularEdad('10/10/1993')
  }

  private calcularEdad(fechaNacimiento: string): string {
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const edadEnMilisegundos = new Date().getTime() - fechaNacimientoDate.getTime();
    const edadEnAnios = edadEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25); // milisegundosEnUnAnio, considerando años bisiestos
    return Math.floor(edadEnAnios).toString();
  }

}
