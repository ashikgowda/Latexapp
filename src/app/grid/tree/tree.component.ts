import { Component, OnInit, Input } from '@angular/core';
import { AddTextAreaService } from 'src/app/add-text-area.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // public chapterList = [];
  // public sectionList = [];

  addChapter(add: AddTextAreaService ) {
  //this.chapterList.push('text_area'+ (this.chapterList.length + 1));
  //public add : new AddTextAreaService();
  add.addTextArea();
}

/*addSection(){
  this.chapterList.push('text_area' + (this.chapterList.length + 1));
}
removeTextArea(index){
  this.chapterList.splice(index, 1);
}
*/
}



