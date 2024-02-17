import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Skill {
  name: string;
  img?: string;
  link?: string;
  description?: string;
  percentage: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public imagenCargando = true;
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
    this.http.get<any[]>(this.Json).subscribe({
      next: (data) => {
        if (data && data.length !== 0) {
          this.lista = data;
          this.filtrarLista();
        }
      },
      error: (error) => console.error(error)
    });
  }

  public filtrarLista(): void {
    this.listaFiltrada = this.lista.filter(item =>
      item.name.toLowerCase().includes(this.filtro.toLowerCase()) ||
      item.description!.toLowerCase().includes(this.filtro.toLowerCase())
    );
    this.seleccionarPrimerItem();
  }

  public hayMasDeOchoItems(): boolean {
    return this.lista.length > 8;
  }

  public seleccionarItem(item: Skill, index: number) {
    if (this.itemSeleccionadoIndex !== index)
      this.imagenCargando = true;
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
