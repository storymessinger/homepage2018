import { BackgroundService } from './services/background.service';
import { Observable } from 'rxjs/Rx';
// import { BColorService } from './services/b-color.service';
import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  bColor$:Observable<string>;

  constructor(
    // private bColorService:BColorService
    private backgroundService:BackgroundService
  ){

  }

  ngOnInit() {
    this.backgroundService.backgroundCanvas('background','#EFEFEF',1);
    // this.bColor$ = this.bColorService.color$
    //   .do( color => console.log(color));
  }


}
