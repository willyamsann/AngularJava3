import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  counter = 0;
  test = "";

  ngOnInit(): void {
  }

  increment(){
    this.counter ++;
    if(this.counter > 10){
      this.test = "Maior que 10";
    }
  }

}
