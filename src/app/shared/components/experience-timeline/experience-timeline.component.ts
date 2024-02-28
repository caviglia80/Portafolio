import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-experience-timeline',
  templateUrl: './experience-timeline.component.html',
  styleUrls: ['./experience-timeline.component.css']
})
export class ExperienceTimelineComponent implements OnInit {
  @Input() jobData: any = {};
  svgSeleccion: number = 3;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  public scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  public seleccionarSVG(id: number) {
    this.svgSeleccion = id;
  }

  public cargarDatos() {
    try {
      if (this.http) {
        this.http.get<any>('assets/data/expLaboral.json').subscribe((data) => {
          if (data) {
            this.jobData = data;
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
}
