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
  public listaFiltrada: Skill[] = [];
  public filtro: string = '';
  public itemSeleccionado: Skill | null = null;
  public itemSeleccionadoIndex: number = -1;
  @Input() title: string = '';
  @Input() Json: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cargarDatos();
  }

  private cargarDatos() {
    this.http.get<Skill[]>(this.Json).subscribe({
      next: (data) => {
        this.lista = data;
        this.filtrarLista();
      },
      error: (error) => console.error(error)
    });
  }

  public filtrarLista(): void {
    this.listaFiltrada = this.lista.filter(item =>
      item.name.toLowerCase().includes(this.filtro.toLowerCase()) ||
      item.description.toLowerCase().includes(this.filtro.toLowerCase())
    );
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
