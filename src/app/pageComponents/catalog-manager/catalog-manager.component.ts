import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-catalog-manager',
  templateUrl: './catalog-manager.component.html',
  styleUrls: ['./catalog-manager.component.css']
})
export class CatalogManagerComponent implements OnInit {
  cmOptions: any;
  logContent: string = "select * from table;";

  constructor(private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.cmOptions = {
      "lineNumbers": true,
      foldGutter: true,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
    }
  }






}
