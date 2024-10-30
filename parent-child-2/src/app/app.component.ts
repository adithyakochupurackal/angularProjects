import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child-2';
childItems :string[]=[]

  childEvent(item:string){
    this.childItems.push(item);
  }
}







