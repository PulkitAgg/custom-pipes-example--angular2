import { Component } from '@angular/core';
import { lengthLimitPipe } from '../customPipes';
import { arrayLimitPipe } from '../customPipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
public  arr1 :Array<number> = [1,2,3,4,5,6,7];
}
