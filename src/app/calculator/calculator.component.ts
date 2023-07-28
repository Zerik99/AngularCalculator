import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent{
  PressedButtons: string[]
  CalcText: string;
  CalcLayout: CalculatorButton[];

  constructor(){
    this.PressedButtons=[]
    this.CalcText='';
    this.CalcLayout =[
      {value:'C', type: ButtonType.Clear},{value:'(', type: ButtonType.Parenthesis},{value:')', type: ButtonType.Parenthesis},{value: '/', type: ButtonType.Operator},
      {value:'7', type: ButtonType.Number},{value:'8', type: ButtonType.Number},{value:'9', type: ButtonType.Number},{value:'*', type: ButtonType.Operator},
      {value:'4', type: ButtonType.Number},{value:'5', type: ButtonType.Number},{value:'6', type: ButtonType.Number},{value:'-', type: ButtonType.Operator},
      {value:'1', type: ButtonType.Number},{value:'2', type: ButtonType.Number},{value:'3', type: ButtonType.Number},{value:'+', type: ButtonType.Operator},
      {value: '', type: ButtonType.Empty},{value: '0', type: ButtonType.Number},{value: '.', type: ButtonType.Decimal},{value: '=', type: ButtonType.Equals}
    ];
  }

  onButtonClick(PressedButton:CalculatorButton){
    console.log('Button Value: ' + PressedButton.value + " Button Type: " + PressedButton.type)
    switch (PressedButton.type) {
      case ButtonType.Clear:
        this.clearCalcText();
        break;
      case ButtonType.Equals:
        this.CalcText = this.calculateProblem(this.PressedButtons);
        this.PressedButtons.push(this.CalcText)
        break;
      case ButtonType.Operator:
        this.PressedButtons.push(' ', PressedButton.value, ' ');
        this.CalcText = this.PressedButtons.join('');
        break;
      case ButtonType.Parenthesis:
        this.PressedButtons.push(' ', PressedButton.value, ' ');
        this.CalcText = this.PressedButtons.join('');
        break;
      case ButtonType.Number:
        this.PressedButtons.push(PressedButton.value);
        this.CalcText = this.PressedButtons.join('');
        break;
      case ButtonType.Decimal:
        this.PressedButtons.push(PressedButton.value);
        this.CalcText = this.PressedButtons.join('');
        break;
      default:
        console.log('Key not recognized');
        break;
    }
  }

  calculateProblem(PressedButtons:string[]){
    var result:string
    if(PressedButtons.length == 0){
      console.warn('No expression to calculate.')
      result = 'No expression to calculate.'
      return result
    }

    try{
      let expression = PressedButtons.join('')
      result = eval(expression);
      this.clearCalcText()
      return result
    }catch(error){
      console.error(`Error in expression:  ${error}`)
      result = `Error in expression: ${error}`
      return result
    }
  }

  clearCalcText(){
    this.PressedButtons = [];
    this.CalcText = '';
  }
}

enum ButtonType{
  Empty = 'empty',
  Operator = 'operator',
  Number = 'number',
  Equals = 'equals',
  Decimal = 'decimal',
  Parenthesis = 'parenthesis',
  Clear = 'clear'
};

interface CalculatorButton {
  value: string;
  type: ButtonType;
}


