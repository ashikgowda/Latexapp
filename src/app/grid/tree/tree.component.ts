import { FlatTreeControl } from '@angular/cdk/tree';
import { Component,Renderer2,ElementRef, Injectable } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';

/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
// export class FileNode {
//   children: FileNode[];
//   filename: string;
//   type: any;
// }

/** Flat node with expandable and level information */
// export class FileFlatNode {
//   constructor(
//     public expandable: boolean, public filename: string, public level: number, public type: any) { }
// }

/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
// const TREE_DATA = JSON.stringify(
//   {
//     "Introduction": "1. INTRODUCTION",
//     "1.1 Basic": { 
//       "PARAGRAPH ONE": "The learning algorithm plays an important role in pattern classification particularlyif the image object varies its",
//       "PATAGRAPH TWO": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem  Ipsum  has  been  the  industry’s  standard  dummy  text  ever  since  the1500s,  when  an  unknown  printer  took  a  galley  of  type  and  scrambled  it  tomake a type specimen book.  It has survived not only five centuries, but alsothe  leap  into  electronic  typesetting,  remaining  essentially  unchanged.   It  waspopularised in the 1960s with the release of Letraset sheets containing LoremIpsum passages, and more recently with desktop publishing software like AldusPageMaker including versions of Lorem Ipsum.",
//     }
//   }
// );

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
// @Injectable()
// export class FileDatabase {
//   dataChange = new BehaviorSubject<FileNode[]>([]);

//   get data(): FileNode[] { return this.dataChange.value; }

//   constructor() {
//     // this.initialize();
//   }

  // initialize() {
  //   // Parse the string to json object.
  //   const dataObject = JSON.parse(TREE_DATA);

  //   // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
  //   //     file node as children.
  //   const data = this.buildFileTree(dataObject, 0);

  //   // Notify the change.
  //   this.dataChange.next(data);
  // }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
//   buildFileTree(obj: object, level: number): FileNode[] {
//     return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
//       const value = obj[key];
//       const node = new FileNode();
//       node.filename = key;

//       if (value != null) {
//         if (typeof value === 'object') {
//           node.children = this.buildFileTree(value, level + 1);
//         } else {
//           node.type = value;
//         }
//       }

//       return accumulator.concat(node);
//     }, []);
//   }
// }


@Component({
  selector: 'app-tree',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.css'],
  // providers: [FileDatabase]
})
export class TreeComponent {

  public greeting="";
  public chapters:Array<any>=[];
  constructor(private renderer:Renderer2, private el: ElementRef ) {}


  // treeControl: FlatTreeControl<FileFlatNode>;
  // treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
  // dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;

  // constructor(database: FileDatabase) {
  //   this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
  //     this._isExpandable, this._getChildren);
  //   this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
  //   this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  //   database.dataChange.subscribe(data => this.dataSource.data = data);
  // }

  // transformer = (node: FileNode, level: number) => {
  //   return new FileFlatNode(!!node.children, node.filename, level, node.type);
  // }

  // private _getLevel = (node: FileFlatNode) => node.level;

  // private _isExpandable = (node: FileFlatNode) => node.expandable;

  // private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);

  // hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;

  public  addChapter(){
    console.log(event);
    this.greeting='Added Chapter';


    const div = this.renderer.createElement('div');
    const input = this.renderer.createElement('input');

    this.renderer.appendChild(div, input);

    this.renderer.addClass(div, 'col-md-6');
    this.renderer.addClass(div, 'col-sm-6');
    this.renderer.addClass(div, 'col-xs-12');

    console.log('cross passes the code');
    this.renderer.addClass(input, 'form-control');
    this.renderer.addClass(input, 'col-md-7');
    this.renderer.addClass(input, 'col-xs-12');

    const textboxes = document.getElementById('inner2');

    this.renderer.appendChild(textboxes, div);
}
public  addSection(){
  console.log(event);
  
  this.greeting='Added Section';

  const div = this.renderer.createElement('div');
  const input = this.renderer.createElement('input');

  this.renderer.appendChild(div, input);

  this.renderer.addClass(div, 'col-md-6');
  this.renderer.addClass(div, 'col-sm-6');
  this.renderer.addClass(div, 'col-xs-12');

  console.log('cross passes the code');
  this.renderer.addClass(input, 'form-control');
  this.renderer.addClass(input, 'col-md-7');
  this.renderer.addClass(input, 'col-xs-12');

  const textboxes = document.getElementById('inner2');

  this.renderer.appendChild(textboxes, div);
}

public  addSubsection(){
  console.log(event);
  this.greeting='Added sub section';


  const div = this.renderer.createElement('div');
  const input = this.renderer.createElement('input');

  this.renderer.appendChild(div, input);

  this.renderer.addClass(div, 'col-md-6');
  this.renderer.addClass(div, 'col-sm-6');
  this.renderer.addClass(div, 'col-xs-12');

  console.log('cross passes the code');
  this.renderer.addClass(input, 'form-control');
  this.renderer.addClass(input, 'col-md-7');
  this.renderer.addClass(input, 'col-xs-12');

  const textboxes = document.getElementById('inner2');

  this.renderer.appendChild(textboxes, div);
}
  }
    

