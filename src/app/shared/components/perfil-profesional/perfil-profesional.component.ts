import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-profesional',
  templateUrl: './perfil-profesional.component.html',
  styleUrls: ['./perfil-profesional.component.css']
})
export class PerfilProfesionalComponent {
  public imgPerfil: string = 'assets/img/Perfil.jpg';
  imageError: boolean = false;
}
