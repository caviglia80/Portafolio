import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.fondoParticulas();
  }

  private fondoParticulas() {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            value_area: 2000
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 180,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
      },
    });
  }

}
