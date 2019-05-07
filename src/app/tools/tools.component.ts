import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddTextAreaService } from '../add-text-area.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  event = new BehaviorSubject<string>('Click');
  click = this.event.asObservable();
  service = new AddTextAreaService();
  constructor() {

  }

  ngOnInit() {

  }
  addTextArea() {
    this.service.sendEvent();
  }
}
