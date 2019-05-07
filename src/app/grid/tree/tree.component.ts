import { Component, OnInit } from '@angular/core';
import { AddTextAreaService } from 'src/app/add-text-area.service';
import { ToolsComponent } from 'src/app/tools/tools.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  item = 0;
  subscription: Subscription;
  constructor(private temp: AddTextAreaService) {

  }

  ngOnInit() {
    this.subscription = this.temp.click.subscribe();
    this.changeDom();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  changeDom() {
    console.log('IS THIS WORKING');
  }

}



