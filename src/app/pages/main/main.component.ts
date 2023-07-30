import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '@components/modal/modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  modalRef: BsModalRef | null = null;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.openModal();
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent, { class: 'modal-dialog-centered', backdrop: 'static' });
  }
}
