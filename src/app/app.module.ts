import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NavComponent } from '@components/nav/nav.component';
import { ModalComponent } from '@components/modal/modal.component';
import { MainComponent } from '@pages/main/main.component';
import { DesarrolloComponent } from '@pages/desarrollo/desarrollo.component';
import { QaComponent } from '@pages/qa/qa.component';
import { TitleComponent } from './shared/components/title/title.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { PortafolioComponent } from './shared/components/portafolio/portafolio.component';
import { ExperienciaLaboralComponent } from './shared/components/experiencia-laboral/experiencia-laboral.component';
import { PerfilProfesionalComponent } from './shared/components/perfil-profesional/perfil-profesional.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TopButtonComponent } from './shared/components/top-button/top-button.component';

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
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
