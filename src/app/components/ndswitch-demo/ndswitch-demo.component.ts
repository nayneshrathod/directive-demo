import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ndswitch-demo',
  templateUrl: './ndswitch-demo.component.html',
  styleUrls: ['./ndswitch-demo.component.css']
})
export class NdswitchDemoComponent implements OnInit {

  choice = 1;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.userChoice){
      this.choice = localStorage.userChoice ;
    }
  }
  setChoice(choice) {
    this.choice = choice;
    localStorage.userChoice = choice;
  }

}
