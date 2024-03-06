import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GVariableService {
  private _darkModeDefault: boolean = true;

  constructor() { }

  get darkModeState(): boolean {
    return localStorage.getItem('darkModeEnabled') === 'true';
  }
  set darkModeState(value: boolean) {
    localStorage.setItem('darkModeEnabled', value.toString());
  }

  get darkModeDefault(): boolean {
    return this._darkModeDefault;
  }
}



