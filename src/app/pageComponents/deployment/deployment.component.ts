import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.css']
})
export class DeploymentComponent implements OnInit {
  value: string = "test";

  constructor() { }

  ngOnInit(): void {
  }

}
