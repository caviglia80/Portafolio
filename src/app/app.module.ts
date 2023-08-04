import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

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
import { CursorCircleComponent } from './shared/components/cursor-circle/cursor-circle.component';
import { WhatsappBtnComponent } from './shared/components/whatsapp-btn/whatsapp-btn.component';
import { LinkedinBtnComponent } from './shared/components/linkedin-btn/linkedin-btn.component';
import { GithubBtnComponent } from './shared/components/github-btn/github-btn.component';
import { TopBtnComponent } from './shared/components/top-btn/top-btn.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { PercentageSortPipe } from './core/pipes/percentage-sort.pipe';
import { EmpleadoresComponent } from './shared/components/empleadores/empleadores.component';
import { DevRepositoriesComponent } from './shared/components/dev-repositories/dev-repositories.component';


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
    CursorCircleComponent,
    WhatsappBtnComponent,
    LinkedinBtnComponent,
    GithubBtnComponent,
    TopBtnComponent,
    SkillsComponent,
    PercentageSortPipe,
    EmpleadoresComponent,
    DevRepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
