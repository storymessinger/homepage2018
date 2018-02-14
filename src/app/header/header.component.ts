import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() selectProject;
  click = false;;


  // @HostListener('window:resize') onresize() {
  // }
  
  constructor(
    // private eyeBlinkService:EyeBlinkService
  ) { }


  ngOnInit() {
  }

  eyeBlink(){
    // this.eyeBlinkService.blink = true;
  }
}