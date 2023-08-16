import { Component } from '@angular/core';
import { Subject, debounceTime, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(){
  //   console.log(this.inputs);
  // }

    
      // ngOnInit(){
      //   const stream$ = fromEvent(this.inputs, 'input')
      //     .pipe(
      //       map(e  => (e.target as HTMLInputElement).value),
      //       debounceTime(1000),
            
      //       )
      //     .subscribe(
      //       value => {
      //         {next: console.log(value);}
      //       }
      //     );
      //   }
    

}
