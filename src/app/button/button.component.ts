import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() value: string;

  @Input() type: string;


  constructor(){
   this.value = '';
   this.type = '';
  }

}
