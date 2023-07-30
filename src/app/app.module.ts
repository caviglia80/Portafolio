import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HeaderComponent } from '@components/header/header.component';
import { NavComponent } from '@components/nav/nav.component';
import { ModalComponent } from '@components/modal/modal.component';
import { MainComponent } from '@pages/main/main.component';
import { DesarrolloComponent } from '@pages/desarrollo/desarrollo.component';
import { QaComponent } from '@pages/qa/qa.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ModalComponent,
    MainComponent,
    DesarrolloComponent,
    QaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
