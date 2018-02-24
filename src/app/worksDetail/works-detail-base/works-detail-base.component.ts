import { BackgroundService } from './../../services/background.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-detail-base',
  templateUrl: './works-detail-base.component.html',
  styleUrls: ['./works-detail-base.component.scss']
})
export class WorksDetailBaseComponent implements OnInit {

  constructor(private backgroundService:BackgroundService) { }

  ngOnInit() {
    this.backgroundService.backgroundCanvas('back','#fff', 0.787, '#EEEEEE', '#FFFFFF', 40);
  }

}
