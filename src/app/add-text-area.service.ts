import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddTextAreaService {
  event = new BehaviorSubject<string>('Click');
  click = this.event.asObservable();
  sendEvent() {
    this.event.next('Click');
    console.log('HAHA');
  }


}
