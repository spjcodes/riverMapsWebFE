import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-cluster-setting',
  templateUrl: './cluster-setting.component.html',
  styleUrls: ['./cluster-setting.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ClusterSettingComponent implements OnInit {
  private messageService: any;


  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {

  }

  saveClusterInfo() {

  }


}
