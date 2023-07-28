import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calc-window',
  templateUrl: './calc-window.component.html',
  styleUrls: ['./calc-window.component.scss']
})
export class CalcWindowComponent {

  @Input() textvalue: string;


  constructor(){
    this.textvalue=''
  }


}
