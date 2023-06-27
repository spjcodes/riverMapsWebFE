import {Component, OnInit, Renderer2} from '@angular/core';
import {TreeNode} from "primeng/api";
import { SplitterModule } from 'primeng/splitter';

class Customer {
  constructor(name: string, country: string, company: string, representative: string) {
    this.name = name;
    this.company = company;
    this.country = country;
    this.representative = representative;
  }

  name!: string;
  country?: string;
  company?: string;
  representative?: string;
}

@Component({
  selector: 'app-catalog-manager',
  templateUrl: './catalog-manager.component.html',
  styleUrls: ['./catalog-manager.component.css']
})
export class CatalogManagerComponent implements OnInit {
  cmOptions: any;
  logContent: string = "select * from table;";
  customers!: Customer[];
  first = 0;
  rows = 10;
  constructor(private renderer: Renderer2) {

  }

  files : TreeNode[] = [];

  ngOnInit() {
    this.files = [
      {
        label: 'Hive',
        expanded: true,
        children: [
          {
            label: 'Databases',
            expanded: true,
            children: [
              {
                label: 'db1',
                expanded: true,
                children: [
                  {
                    label: 'Tables',
                    expanded: true,
                    children: [
                      {label: 'table1'},
                      {label: 'table2'},
                      {label: 'table3'}
                    ]
                  }
                ]
              },
              {label: 'db2'},
              {label: 'db3'}
            ]
          },
          {
            label: 'Functions',
            expanded: true,
            children: [
              {label: 'function1'},
              {label: 'function2'},
              {label: 'function3'}
            ]
          }
        ]
      }
    ];
    this.customers = new Array<Customer>();
    this.customers.push(new Customer("a", "b", "c", "d"))
  }
    next() {
      this.first = this.first + this.rows;
    }

    prev() {
      this.first = this.first - this.rows;
    }

    reset() {
      this.first = 0;
    }

    isLastPage(): boolean {
      return this.customers ? this.first === this.customers.length - this.rows : true;
    }

    isFirstPage(): boolean {
      return this.customers ? this.first === 0 : true;
    }

}
