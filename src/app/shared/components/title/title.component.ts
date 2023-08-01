import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  public title: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title = this.router.url.includes('desarrollo') ? 'Desarrollador Web' : 'Quality Assurance';
  }
}
