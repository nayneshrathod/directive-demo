import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforof-demo',
  templateUrl: './ngforof-demo.component.html',
  styleUrls: ['./ngforof-demo.component.css']
})
export class NgforofDemoComponent implements OnInit {

  people: Array<any>;
  constructor() { }
  imgStyles = {
    'height.px': 100,
    'border-radius.px': 50,
    'margin.px': 5
};

  ngOnInit(): void {
    this.people = [
      { name: 'Naynesh Rathod', age: 26, city: 'Pashte', picture: '/assets/Imgaes/naynesh.png' },
      { name: 'Khumesh Rathod', age: 20, city: 'Nardana', picture: '/assets/Imgaes/khumesh.jpg' },
      { name: 'Swati Rathod', age: 23, city: 'Shirpur', picture: '/assets/Imgaes/swati.png' },
      { name: 'Raghunath Rathod', age: 51, city: 'Holnanthe', picture: '/assets/Imgaes/raghunath.png' },
    ];
  }
  getCssClass(age){
    if (age >= 21){
      return 'text-success';
    }else{
      return 'text-danger';
    }
  }
  deletePerson(index){
    this.people.splice(index, 1);
  }
}
