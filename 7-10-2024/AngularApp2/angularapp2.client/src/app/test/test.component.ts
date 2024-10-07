import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  email="rama@gmail.com"
  name: string = "rama";
  num: number = 12;
  clur: string = "red";
  imgUrl: string = "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-1170x780.jpg";
  changeName() {
    this.name = "hadeel";
  }

  userObj = {
    name: "rama",
    age: 10,
    color:"yellow"

  }

  usersArray = [
    {
      name: "rama",
      grade: 12,
      color:"yellow"
    },
    {
      name: "najlaa",
      grade: 22,
      color: "red"
    },
    {
      name: "Yussef",
      grade: 20,
      color: "blue"
    },
  ]

}
