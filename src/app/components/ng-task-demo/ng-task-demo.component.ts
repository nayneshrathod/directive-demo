import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-task-demo',
  templateUrl: './ng-task-demo.component.html',
  styleUrls: ['./ng-task-demo.component.css']
})
export class NgTaskDemoComponent implements OnInit {
  bgColor: string;

  ngOnInit() {
    this.bgColor = 'yellowgreen';
  }

  changeBackground(color: string) {
    this.bgColor = color;
  }

  changeBackgroundRandomly() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    this.bgColor = `rgb(${r}, ${g}, ${b})`;
  }

}
