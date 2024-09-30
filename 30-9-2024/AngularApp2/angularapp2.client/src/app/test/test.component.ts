import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  name: string = "rama";
  num: number = 12;
  imgUrl: string = "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-1170x780.jpg";
  changeName() {
    this.name = "hadeel";
  }

}
