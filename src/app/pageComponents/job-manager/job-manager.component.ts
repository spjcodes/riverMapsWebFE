import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";

@Component({
  selector: 'app-job-manager',
  templateUrl: './job-manager.component.html',
  styleUrls: ['./job-manager.component.css']
})
export class JobManagerComponent implements OnInit {
  items: MenuItem[]  = new Array<MenuItem>();

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload']
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io'
      }
    ];
  }

}
