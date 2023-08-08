import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  public errorLabel: boolean = false;

  constructor(public bsModalRef: BsModalRef) { }

  hide(): void {
    try {
      this.bsModalRef.hide();
    } catch (error) {
      console.log(error);
    }
  }
  error(): void {
    try {
      this.errorLabel = true;
    } catch (error) {
      console.log(error);
    }
  }

}


