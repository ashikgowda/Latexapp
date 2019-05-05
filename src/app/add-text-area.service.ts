import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddTextAreaService {
  public chapterList = [];
  public sectionList = [];
  addTextArea() {
    this.chapterList.push('text_area' + (this.chapterList.length + 1));
  }
  addSection() {
    this.chapterList.push('text_area' + (this.chapterList.length + 1));
  }
  removeTextArea(index) {
    this.chapterList.splice(index, 1);
  }

}
