import { Component, OnInit } from '@angular/core';
import { AddTextAreaService } from 'src/app/add-text-area.service';
import {ToolsComponent} from 'src/app/tools/tools.component';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor(temp: ToolsComponent) { }

  ngOnInit() {
  }

}



