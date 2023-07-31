import { Component } from '@angular/core';
import { GlobalVariables } from 'src/app/app.component';

@Component({
  selector: 'app-whatsapp-btn',
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.css']
})
export class WhatsappBtnComponent {
 
  redirectToWsp() {
    const webLink = "https://wa.me/" + GlobalVariables.wspNumer + "/?text=" + encodeURIComponent(GlobalVariables.wspTxt);
    window.open(webLink, '_blank', 'noopener,noreferrer');
  }
}
