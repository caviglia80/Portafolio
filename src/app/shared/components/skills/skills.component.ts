import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  public listaFiltrada: Skill[] = this.lista;
  public filtro: string = '';
  public itemSeleccionado: Skill | null = this.lista[0]; //  por defecto primer elemento
  public itemSeleccionadoIndex: number = 0;
  @Input() title: string = '';
  @Input() Json: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cargarDatos();
  }

  private cargarDatos() {
    try {
      if (this.http)
        this.http.get<any>(this.Json).subscribe((data) => {
          if (data) {
            this.lista = data;
            this.filtrarLista();
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  /* filtrar solo por name */
  /*   public filtrarLista(): void {
      this.listaFiltrada = this.lista.filter(item => item.name.toLowerCase().includes(this.filtro.toLowerCase()));
      this.seleccionarPrimerItem();
    } */

  /* filtrar por name y description */
  public filtrarLista(): void {
    try {
      this.listaFiltrada = this.lista.filter(item =>
        item.name.toLowerCase().includes(this.filtro.toLowerCase()) ||
        item.description.toLowerCase().includes(this.filtro.toLowerCase())
      );
      this.seleccionarPrimerItem();
    } catch (error) {
      console.log(error);
    }
  }

  public hayMasDeOchoItems(): boolean {
    try {
      return this.lista.length > 8;
    } catch (error) {
      console.log(error);
      return true;
    }
  }

  public seleccionarItem(item: Skill, index: number) {
    try {
      this.itemSeleccionado = item;
      this.itemSeleccionadoIndex = index;
    } catch (error) {
      console.log(error);
    }
  }

  private seleccionarPrimerItem() {
    try {
      if (this.listaFiltrada.length > 0) {
        this.itemSeleccionado = this.listaFiltrada[0];
        this.itemSeleccionadoIndex = 0;
      } else {
        this.itemSeleccionado = null;
        this.itemSeleccionadoIndex = -1;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
