import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';

interface Skill {
  name: string;
  description: string;
  percentage: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  private lista: Skill[] = [];
  private listaUrl: string = '';
  public title: string = '';
  public listaFiltrada: Skill[] = this.lista;
  public filtro: string = '';
  public itemSeleccionado: Skill | null = this.lista[0]; //  por defecto primer elemento
  public itemSeleccionadoIndex: number = 0;
  @Input() Json: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
/*     if (AppComponent.currentUrl.includes('desarrollo')) {
      this.listaUrl = 'assets/data/dev.json';
      this.title = 'Desarrollo y otros conocimientos';
    }
    else {
      this.listaUrl = 'assets/data/qa.json';
      this.title = 'Quality Assurance y otros conocimientos';
    } */

    this.listaUrl = 'assets/data/skills.json';
    this.cargarDatos();
  }

  cargarDatos() {
    this.http.get<any>(this.listaUrl).subscribe((data) => {
      if (data && data[this.Json]) {
        this.lista = data[this.Json];
        this.filtrarLista();
      }
    });
  }

  public filtrarLista(): void {
    this.listaFiltrada = this.lista.filter(item => item.name.toLowerCase().includes(this.filtro.toLowerCase()));
    this.seleccionarPrimerItem();
  }

  public hayMasDeOchoItems(): boolean {
    return this.lista.length > 8;
  }

  public seleccionarItem(item: Skill, index: number) {
    this.itemSeleccionado = item;
    this.itemSeleccionadoIndex = index;
  }

  private seleccionarPrimerItem() {
    if (this.listaFiltrada.length > 0) {
      this.itemSeleccionado = this.listaFiltrada[0];
      this.itemSeleccionadoIndex = 0;
    } else {
      this.itemSeleccionado = null;
      this.itemSeleccionadoIndex = -1;
    }
  }

}
