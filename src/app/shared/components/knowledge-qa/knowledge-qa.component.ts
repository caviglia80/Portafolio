import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Skill {
  name: string;
  description: string;
  percentage: number;
}

@Component({
  selector: 'app-knowledge-qa',
  templateUrl: './knowledge-qa.component.html',
  styleUrls: ['./knowledge-qa.component.css']
})
export class KnowledgeQaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cargarDatos();
  }

  private lista: Skill[] = [];
  public listaFiltrada: Skill[] = this.lista;
  public filtro: string = '';
  public itemSeleccionado: Skill | null = this.lista[0]; //  por defecto primer elemento
  public itemSeleccionadoIndex: number = 0;

  cargarDatos() {
    this.http.get<Skill[]>('assets/data/qa.json').subscribe((data) => { 
      this.lista = data;
      this.filtrarLista();
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
