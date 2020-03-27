import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-request-list',
  templateUrl: './other-request-list.component.html',
  styleUrls: ['./other-request-list.component.scss']
})
export class OtherRequestListComponent implements OnInit {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
   
  constructor() { }

  ngOnInit(): void {
  }

}
