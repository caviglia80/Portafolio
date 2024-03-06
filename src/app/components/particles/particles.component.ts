import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.fondoParticulas();
    // this.Estrellas();
    // this.Burbujas();
    this.Nieve();
    // this.Red();
    document.addEventListener('DOMContentLoaded', () => {
      // new BubbleParticles();
    });
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

  private Estrellas() {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#3da5e2"
        },
        shape: {
          type: "star",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });

  }

  private Burbujas() {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#81d4fa"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          }
        },
        opacity: {
          value: 0.6,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 10,
          random: true,
          anim: {
            enable: true,
            speed: 10,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          },
          onclick: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      retina_detect: true
    });
  }

  private Nieve() {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#3da5e2"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 20,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 2,
          direction: "bottom",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          },
          onclick: {
            enable: false
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 0.8,
            speed: 3
          }
        }
      },
      retina_detect: true
    });
  }

  private Red() {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ad1457"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
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
          distance: 150,
          color: "#ad1457",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });

  }
}





// class BubbleParticles {
//   private scene: THREE.Scene;
//   private camera: THREE.PerspectiveCamera;
//   private renderer: THREE.WebGLRenderer;
//   private particlesMesh: THREE.Points | null = null;

//   constructor() {
//     this.scene = new THREE.Scene();
//     this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//     // Crear el renderer y configurar el tamaño y color de fondo
//     this.renderer = new THREE.WebGLRenderer();
//     this.renderer.setClearColor('#000000'); // Color de fondo opcional
//     const container = document.getElementById('three-js');
//     if (container) {
//       this.renderer.setSize(container.clientWidth, container.clientHeight);
//       container.appendChild(this.renderer.domElement); // Montar el lienzo en el contenedor específico
//     } else {
//       console.error('No se encontró el contenedor #three-js');
//     }

//     this.initParticles();
//     this.animate();
//     this.setupResize();
//   }

//   private initParticles(): void {
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCnt = 5000; // Cantidad de partículas
//     const posArray = new Float32Array(particlesCnt * 3); // x, y, z por partícula

//     for (let i = 0; i < particlesCnt * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
//     }

//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.005,
//       color: '#81d4fa'
//     });

//     this.particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
//     this.scene.add(this.particlesMesh);

//     this.camera.position.z = 3;
//   }

//   private animate = (): void => {
//     requestAnimationFrame(this.animate);
//     if (this.particlesMesh) {
//       this.particlesMesh.rotation.y += 0.001;
//     }
//     this.renderer.render(this.scene, this.camera);
//   }

//   private setupResize() {
//     window.addEventListener('resize', this.onWindowResize, false);
//   }

//   private onWindowResize = (): void => {
//     const container = document.getElementById('three-js');
//     if (container) {
//       this.camera.aspect = container.clientWidth / container.clientHeight;
//       this.camera.updateProjectionMatrix();
//       this.renderer.setSize(container.clientWidth, container.clientHeight);
//     }
//   }
// }

