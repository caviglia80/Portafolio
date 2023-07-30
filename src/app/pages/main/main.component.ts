import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '@components/modal/modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private modalService: BsModalService) { }
  ngOnInit() { this.modalService.show(ModalComponent, { class: 'modal-dialog-centered', backdrop: 'static' }); }
}
