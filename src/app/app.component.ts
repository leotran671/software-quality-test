import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{

  add(a: number,b: number){
    return a+b;
  }

  sub(a: number,b: number){
    return a-b;
  }

  mul(a: number,b: number){
    return a*b;
  }

  div(a: number, b: number) {
    if (b === 0) {
      return NaN;
    } else {
      return a / b;
    }
  }
}
