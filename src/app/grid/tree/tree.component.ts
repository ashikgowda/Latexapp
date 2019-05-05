import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 chapterList:any = [];
 sectionList:any = [];

  addChapter(){        
      this.chapterList.push('text_area'+ (this.chapterList.length + 1));
  }

  addSection(){        
    this.chapterList.push('text_area'+ (this.chapterList.length + 1));
}
  removeTextArea(index){
      this.chapterList.splice(index, 1);
  }

}



