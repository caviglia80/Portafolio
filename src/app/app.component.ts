import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { GVariableService } from '@services/gVariable/g-variable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Software Developer';
  cv = GlobalVariables.cv;


  constructor(
    public gVariableService: GVariableService
  ) {
  }

  ngOnInit() {
    if (!localStorage.getItem('darkModeEnabled')) this.gVariableService.darkModeState = this.gVariableService.darkModeDefault;
  }
}

@Injectable()
export abstract class GlobalVariables {
  public static wspNumer: string = '+393500415970';
  public static linkedinUser: string = 'francisco-caviglia';
  public static githubUser: string = 'caviglia80';
  public static cv: string = 'https://drive.google.com/file/d/1iWY4upJt2d6t_wISFWGtHtcvr33PUjTN/view?usp=drive_link';
}

