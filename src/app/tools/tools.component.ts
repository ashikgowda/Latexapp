import { Component, OnInit} from '@angular/core';
import { AddTextAreaService } from '../add-text-area.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  constructor(service:AddTextAreaService) { 
    addTextArea:any() {
      this.service.service.addTextArea();
    }
  }

  ngOnInit() {
  }

}
