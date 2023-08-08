import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    try {
      const imagenes = document.querySelectorAll('.galeria .contenedor-imagen');
      const imagenModal: HTMLImageElement = document.getElementById('imagen-modal') as HTMLImageElement;

      imagenes.forEach((imagen) => {
        imagen.addEventListener('click', () => {
          const imgElement = imagen.querySelector('img');
          if (imgElement)
            imagenModal.src = imgElement.src;
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
}
