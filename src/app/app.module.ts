import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavComponent } from '@components/nav/nav.component';
import { DesarrolloComponent } from '@pages/desarrollo/desarrollo.component';
import { PerfilProfesionalComponent } from '@components/perfil-profesional/perfil-profesional.component';
import { FooterComponent } from '@components/footer/footer.component';
import { WhatsappBtnComponent } from '@components/whatsapp-btn/whatsapp-btn.component';
import { LinkedinBtnComponent } from '@components/linkedin-btn/linkedin-btn.component';
import { GithubBtnComponent } from '@components/github-btn/github-btn.component';
import { TopBtnComponent } from '@components/top-btn/top-btn.component';
import { SkillsComponent } from '@components/skills/skills.component';
import { PercentageSortPipe } from './core/pipes/percentage-sort.pipe';
import { DevRepositoriesComponent } from '@components/dev-repositories/dev-repositories.component';
import { DarkModeComponent } from '@components/dark-mode/dark-mode.component';
import { ToastComponent } from '@components/toast/toast.component';
import { ParticlesComponent } from '@components/particles/particles.component';
import { GVariableService } from '@services/gVariable/g-variable.service';
import { ExperienceTimelineComponent } from './shared/components/experience-timeline/experience-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DesarrolloComponent,
    PerfilProfesionalComponent,
    FooterComponent,
    WhatsappBtnComponent,
    LinkedinBtnComponent,
    GithubBtnComponent,
    TopBtnComponent,
    SkillsComponent,
    PercentageSortPipe,
    DevRepositoriesComponent,
    DarkModeComponent,
    ToastComponent,
    ParticlesComponent,
    ExperienceTimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GVariableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
