import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-destacado',
  templateUrl: './destacado.component.html',
  styleUrls: ['./destacado.component.css']
})
export class DestacadoComponent {
  public title: string = '';
  public body: string = '';

  constructor(private http: HttpClient) { }

  openModal(item: string) {
    this.http.get<any>('assets/data/destacadosQA.json').subscribe((data) => {
      if (data)
        if (item === 'ECOSISTEMAS') {
          this.title = data.ECOSISTEMAS.title;
          this.body = data.ECOSISTEMAS.body;
        } else if (item === 'HSBC') {
          this.title = data.HSBC.title;
          this.body = data.HSBC.body;
        } else if (item === 'FRAVEGA') {
          this.title = data.FRAVEGA.title;
          this.body = data.FRAVEGA.body;
        }
    });
  }
}
