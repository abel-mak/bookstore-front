import { Injectable } from '@angular/core';

const MY_APP = 'my-app-state';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {
  }

  loadInitialState() {
    return this.getItem(MY_APP)
  }

  updateState(newState: any) {
    const state = this.getItem(MY_APP);
    return this.setItem(MY_APP, newState);
  }

  setItem(key: string, value: any): any {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    const item = localStorage.getItem(key);
    if (item != null)
      return JSON.parse(item)
    return null;
  }
}
