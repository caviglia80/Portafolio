import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GVariableService {
  private _darkModeDefault: boolean = true;

  constructor() { }

  get darkModeState(): boolean {
    /* if (!localStorage.getItem('darkModeEnabled')) localStorage.setItem('darkModeEnabled', this._darkModeDefault.toString()); */
    return localStorage.getItem('darkModeEnabled') === 'true';
  }
  set darkModeState(value: boolean) {
    localStorage.setItem('darkModeEnabled', value.toString());
  }

  get darkModeDefault(): boolean {
    return this._darkModeDefault;
  }




}



