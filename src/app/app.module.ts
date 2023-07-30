import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms'; 

import { NavComponent } from '@components/nav/nav.component';
import { ModalComponent } from '@components/modal/modal.component';
import { MainComponent } from '@pages/main/main.component';
import { DesarrolloComponent } from '@pages/desarrollo/desarrollo.component';
import { QaComponent } from '@pages/qa/qa.component';
import { TitleComponent } from '@components/title/title.component';
import { CarouselComponent } from '@components/carousel/carousel.component';
import { PortafolioComponent } from '@components/portafolio/portafolio.component';
import { ExperienciaLaboralComponent } from '@components/experiencia-laboral/experiencia-laboral.component';
import { PerfilProfesionalComponent } from '@components/perfil-profesional/perfil-profesional.component';
import { FooterComponent } from '@components/footer/footer.component';
import { TopButtonComponent } from '@components/top-button/top-button.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ModalComponent,
    MainComponent,
    DesarrolloComponent,
    QaComponent,
    TitleComponent,
    CarouselComponent,
    PortafolioComponent,
    ExperienciaLaboralComponent,
    PerfilProfesionalComponent,
    FooterComponent,
    TopButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
