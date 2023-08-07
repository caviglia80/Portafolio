import { Component, OnInit } from '@angular/core';
import { GlobalChecker } from 'src/app/app.component';

@Component({
  selector: 'app-perfil-profesional',
  templateUrl: './perfil-profesional.component.html',
  styleUrls: ['./perfil-profesional.component.css']
})
export class PerfilProfesionalComponent implements OnInit {
  public imgPerfil: string = 'assets/Perfil.jpg';

  constructor() { }

  ngOnInit(): void {
    this.checkImages();
  }

  private async checkImages() {
    this.imgPerfil = await GlobalChecker.checkImageExists(this.imgPerfil);
  }
}
