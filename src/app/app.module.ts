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
import { ExperienciaLaboralComponent } from '@components/experiencia-laboral/experiencia-laboral.component';
import { PerfilProfesionalComponent } from '@components/perfil-profesional/perfil-profesional.component';
import { FooterComponent } from '@components/footer/footer.component';
import { WhatsappBtnComponent } from './shared/components/whatsapp-btn/whatsapp-btn.component';
import { LinkedinBtnComponent } from './shared/components/linkedin-btn/linkedin-btn.component';
import { GithubBtnComponent } from './shared/components/github-btn/github-btn.component';
import { TopBtnComponent } from './shared/components/top-btn/top-btn.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { PercentageSortPipe } from './core/pipes/percentage-sort.pipe';
import { EmpleadoresComponent } from './shared/components/empleadores/empleadores.component';
import { DevRepositoriesComponent } from './shared/components/dev-repositories/dev-repositories.component';
import { DestacadoComponent } from './shared/components/destacado/destacado.component';
import { DarkModeComponent } from './shared/components/dark-mode/dark-mode.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { ParticlesComponent } from './shared/components/particles/particles.component';
import { GVariableService } from '@services/gVariable/g-variable.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ModalComponent,
    MainComponent,
    DesarrolloComponent,
    QaComponent,
    TitleComponent,
    ExperienciaLaboralComponent,
    PerfilProfesionalComponent,
    FooterComponent,
    WhatsappBtnComponent,
    LinkedinBtnComponent,
    GithubBtnComponent,
    TopBtnComponent,
    SkillsComponent,
    PercentageSortPipe,
    EmpleadoresComponent,
    DevRepositoriesComponent,
    DestacadoComponent,
    DarkModeComponent,
    ToastComponent,
    ParticlesComponent
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
  providers: [GVariableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
