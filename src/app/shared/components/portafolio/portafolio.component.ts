import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const imagenes = document.querySelectorAll('.galeria .contenedor-imagen');
    const imagenModal: HTMLImageElement = document.getElementById('imagen-modal') as HTMLImageElement;

    imagenes.forEach((imagen) => {
      imagen.addEventListener('click', () => {
        const imgElement = imagen.querySelector('img');
        if (imgElement)
          imagenModal.src = imgElement.src;
      });
    });
  }

}
