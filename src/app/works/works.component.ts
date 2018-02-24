// import { Project } from '../shared/model/project';
// import { ProjectsService } from '../services/projects.service';
// import { BColorService } from './../services/b-color.service';
import {
  Component,
  OnInit
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';


import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
declare var TweenLite, Power2: any;
declare var p5, TimelineMax, TweenMax, Power4; 


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('.project__img',style({ transform: 'translateX(30%)', opacity: 0})),
        query('.project__img',
          stagger('100ms', [
            animate('550ms ease-out', style({ transform: 'translateX(0)', opacity: 1}))
        ]))
      ])
    ])
  ]
})
export class WorksComponent implements OnInit {

  private isOpacity: any;
  private id: number;

  white = 'rgba(255,255,255,0.25)';
  
  projects;
  projects$ =
  [{
    "date" : 141101,
    "id" : 1,
    "list" : [ {
      "projectId" : 1,
      "smallimg" : "./../../assets/Works/2014_Primrose/img/pic01-small.jpg"
    }, {
      "projectId" : 1,
      "smallimg" : "./../../assets/Works/2014_Primrose/img/pic02-small.jpg"
    }, {
      "projectId" : 1,
      "smallimg" : "./../../assets/Works/2014_Primrose/img/pic03-small.jpg"
    }, {
      "projectId" : 1,
      "smallimg" : "./../../assets/Works/2014_Primrose/img/pic04-small.jpg"
    } ],
    "name" : "Primrose",
    "year" : 2014
  }, {
    "date" : 20150301,
    "id" : 2,
    "list" : [ {
      "projectId" : 2,
      "smallimg" : "./../../assets/Works/2015_Humansofkaist/img/pic01-small.jpg"
    }, {
      "projectId" : 2,
      "smallimg" : "./../../assets/Works/2015_Humansofkaist/img/pic02-small.jpg"
    }, {
      "projectId" : 2,
      "smallimg" : "./../../assets/Works/2015_Humansofkaist/img/pic05-small.jpg"
    } ],
    "name" : "Humans of KAIST",
    "year" : 2015
  }, {
    "date" : 20150601,
    "id" : 3,
    "list" : [ {
      "projectId" : 3,
      "smallimg" : "./../../assets/Works/2015_Dustatic/img/pic04-small.jpg"
    }, {
      "projectId" : 3,
      "smallimg" : "./../../assets/Works/2015_Dustatic/img/pic01-small.jpg"
    }, {
      "projectId" : 3,
      "smallimg" : "./../../assets/Works/2015_Dustatic/img/pic06-small.jpg"
    }, {
      "projectId" : 3,
      "smallimg" : "./../../assets/Works/2015_Dustatic/img/pic05-small.jpg"
    } ],
    "name" : "Dustatic; Window filter for your health",
    "year" : 2015
  }, {
    "date" : 20150801,
    "id" : 4,
    "list" : [ {
      "projectId" : 4,
      "smallimg" : "./../../assets/Works/2015_CatShelter/img/pic01-small.jpg"
    }, {
      "projectId" : 4,
      "smallimg" : "./../../assets/Works/2015_CatShelter/img/pic02-small.jpg"
    }, {
      "projectId" : 4,
      "smallimg" : "./../../assets/Works/2015_CatShelter/img/pic03-small.jpg"
    } ],
    "name" : "Concept Product; Catshelter",
    "year" : 2015
  }, {
    "date" : 20150601,
    "id" : 5,
    "list" : [ {
      "projectId" : 5,
      "smallimg" : "./../../assets/Works/2015_Banban/img/pic01-small.jpg"
    }, {
      "projectId" : 5,
      "smallimg" : "./../../assets/Works/2015_Banban/img/pic02-small.jpg"
    }, {
      "projectId" : 5,
      "smallimg" : "./../../assets/Works/2015_Banban/img/pic03-small.jpg"
    }, {
      "projectId" : 5,
      "smallimg" : "./../../assets/Works/2015_Banban/img/pic05-small.jpg"
    } ],
    "name" : "BanBan App Project (Naver UXDP)",
    "year" : 2015
  }, {
    "date" : 20161001,
    "id" : 6,
    "list" : [ {
      "projectId" : 6,
      "smallimg" : "./../../assets/Works/2016_ConsumerToCreator/img/pic10-small.jpg"
    }, {
      "projectId" : 6,
      "smallimg" : "./../../assets/Works/2016_ConsumerToCreator/img/pic02-small.jpg"
    }, {
      "projectId" : 6,
      "smallimg" : "./../../assets/Works/2016_ConsumerToCreator/img/pic03-small.jpg"
    } ],
    "name" : "Consumer to Creator(CHI 17', 3rd author)",
    "year" : 2016
  }, {
    "date" : 20160601,
    "id" : 7,
    "list" : [ {
      "projectId" : 7,
      "smallimg" : "./../../assets/Works/2016_MusicalTrain/img/pic01-small.jpg"
    }, {
      "projectId" : 7,
      "smallimg" : "./../../assets/Works/2016_MusicalTrain/img/pic02-small.jpg"
    }, {
      "projectId" : 7,
      "smallimg" : "./../../assets/Works/2016_MusicalTrain/img/pic03-small.jpg"
    }, {
      "projectId" : 7,
      "smallimg" : "./../../assets/Works/2016_MusicalTrain/img/pic04-small.jpg"
    }, {
      "projectId" : 7,
      "smallimg" : "./../../assets/Works/2016_MusicalTrain/img/pic05-small.jpg"
    } ],
    "name" : "Musical Train : IKEA-hacked musical toy",
    "year" : 2016
  }, 
  // {
  //   "date" : 160501,
  //   "id" : 8,
  //   "list" : [ {
  //     "projectId" : 8,
  //     "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic01-small.jpg"
  //   }, {
  //     "projectId" : 8,
  //     "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic02-small.jpg"
  //   }, {
  //     "projectId" : 8,
  //     "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic03-small.jpg"
  //   } ],
  //   "name" : "Identity Design for STARTUP KAIST",
  //   "year" : 2016
  // }, 
  // {
  //   "date" : 20171201,
  //   "id" : 9,
  //   "name" : "UX study for future plant cultivator ",
  //   "year" : 2017
  // }, 
  {
    "date" : 161201,
    "id" : 10,
    "list" : [ {
      "bigimg" : "./../../assets/Works/2016_ChurrosPrinter/img/pic01-big.jpg",
      "color" : "#d6d6d6",
      "projectId" : 10,
      "smallimg" : "./../../assets/Works/2016_ChurrosPrinter/img/pic01-small.jpg"
      }, {
      "bigimg" : "./../../assets/Works/2016_ChurrosPrinter/img/pic03-big.jpg",
      "color" : "#d6d6d6",
      "projectId" : 10,
      "smallimg" : "./../../assets/Works/2016_ChurrosPrinter/img/pic03-small.jpg"
      }, {
      "bigimg" : "./../../assets/Works/2016_ChurrosPrinter/img/pic04-big.jpg",
      "color" : "#d6d6d6",
      "projectId" : 10,
      "smallimg" : "./../../assets/Works/2016_ChurrosPrinter/img/pic04-small.jpg"
      }, {
      "bigimg" : "./../../assets/Works/2016_ChurrosPrinter/img/pic05-big.jpg",
      "color" : "#d6d6d6",
      "projectId" : 10,
      "smallimg" : "./../../assets/Works/2016_ChurrosPrinter/img/pic05-small.jpg"
    } ],
    "name" : "Churros Printer : Food 3d print machine",
    "year" : 2016
  }, {
    "date" : 20141101,
    "id" : 11,
    "list" : [ {
      "projectId" : 11,
      "smallimg" : "./../../assets/Works/2014_SoundCloudProject/img/pic01-small.jpg"
    }, {
      "projectId" : 11,
      "smallimg" : "./../../assets/Works/2014_SoundCloudProject/img/pic02-small.jpg"
    }, {
      "projectId" : 11,
      "smallimg" : "./../../assets/Works/2014_SoundCloudProject/img/pic03-small.jpg"
    } ],
    "name" : "Soundcloud Redesign Project",
    "year" : 2014
  }
  // , {
  //   "date" : 20141001,
  //   "id" : 12,
  //   "list" : [ {
  //     "projectId" : 12,
  //     "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic01-small.jpg"
  //   }, {
  //     "projectId" : 12,
  //     "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic02-small.jpg"
  //   }, {
  //     "projectId" : 12,
  //     "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic03-small.jpg"
  //   } ],
  //   "name" : "Doradora; Interactive spinning game",
  //   "year" : 2014
  // } 
  // ,{
  //   "date" : 20171201,
  //   "id" : 13,
  //   "list" : [ {
  //     "projectId" : 13,
  //     "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic01-small.jpg"
  //   }, {
  //     "projectId" : 13,
  //     "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic02-small.jpg"
  //   }, {
  //     "projectId" : 13,
  //     "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic03-small.jpg"
  //   } ],
  //   "name" : "Study on Design-in-use Process Through a Hackable Product",
  //   "year" : 2017
  // } 
]

  constructor(
    // private bColorService:BColorService 
    // private projectService:ProjectsService
  ) {
    this.projects = this.projects$.sort(compareDate).reverse();
  }

  ngOnInit() {
    // this.bColorService.getColor('#dddddd');
    // this.projects$ = this.projectService.findAllProjects();
    let self = this;

    var sketch = function (p) {

      let eye;
      let canvasWidth = 70;
      let canvasHeight; 
      let trigger = false;
      let myCanvas;

      p.setup = function () {
        canvasHeight = canvasWidth * 1.5;
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        myCanvas.parent('eyeContainer');
        eye = new Eye(canvasWidth, canvasHeight);
        randomBlink();
      };

      p.mouseClicked = function () {
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
          trigger = true;
        }
      }

      p.draw = function () {
        p.background(0, 0, 0, 0);
        eye.render(p.winMouseX, p.winMouseY, p.mouseX, p.mouseY, trigger);
        trigger = false;

        // eye.update(trigger);

        // test
        // console.log( 'winMouse: ' + p.winMouseX + ', ' + p.winMouseY)
        // console.log( 'Mouse: ' + p.mouseX + ', ' + p.mouseY)
      };


      class Eye {

        CW: number;
        CH:number;
        pupilWidth: number;
        highlight;
        setEyelid;
        eye_lid = {
          y: 0
        };
        hsb;

        constructor(canvasWidth: number, canvasHeight:number) {
          this.CW = canvasWidth;
          this.CH = canvasHeight;
          this.pupilWidth = this.CW * 0.5;
          this.highlight = p.random(['#FF76DA', '#48F1FF', '#FFFE01']);


          p.colorMode(p.HSB,100)
          this.hsb = { H: 0, S: 90, B:90 }
          TweenMax.to(this.hsb, 1, { H: 80, repeat: -1 } );


          this.setEyelid = new TimelineMax({
              paused: true
            })
            .to(this.eye_lid, 0.4, {
              y: this.CW,
              ease: Power4.easeOut
            })
            .to(this.eye_lid, 0.6, {
              y: 0,
              ease: Power4.easeOut
            });
          this.setEyelid.play();
        }


        render(wmx, wmy, mx, my, doBlink) {
          let ew = this.CW;

          this.eyebrow_render(ew);
          this.eyeWhite_render(ew);

          this.pupil_color(mx,my);
          this.pupil_render(wmx,wmy);

          this.eyelid_startBlink(doBlink);
          this.eyelid_render(ew);
        }

        eyebrow_render(ew) {
          p.stroke('rgba(120, 120, 120, 1)');
          p.strokeWeight(4);
          let ew80 = ew/80;
          p.line(ew80 * 17, ew80 * 26, ew80 * 20, ew80 * 38);
          p.line(ew80 * 40, ew80 * 23, ew80 * 40, ew80 * 38);
          p.line(ew80 * 63, ew80 * 26, ew80 * 60, ew80 * 38);
        }

        eyeWhite_render(ew){
          p.noStroke();
          if (p.mouseX > 0 && p.mouseX < this.CW && p.mouseY > this.CH-this.CW && p.mouseY < this.CH) {
            // p.fill('rgba(0,0,0,1)');
            p.fill(this.hsb.H - 10 , this.hsb.S - 10, this.hsb.B - 25);
          } else {
            p.fill('rgba(250,250,250,1)');
          }
          p.rect(0, (this.CH - this.CW), ew, ew);
        }

        // Make eye shine with hightlight colors
        pupil_color(mx,my) {
          if (p.mouseX > 0 && p.mouseX < this.CW && p.mouseY > this.CH-this.CW && p.mouseY < this.CH) {
            p.fill(this.hsb.H, this.hsb.S, this.hsb.B);
            // if (p.frameCount % 10 == 0) {
            //   this.highlight = p.random(['#FF76DA', '#48F1FF', '#F4FF69']);
            //   p.fill(this.hsb.H, 20, 60);
            // } else {
            //   p.fill(this.highlight);
            // }
          } else {
            p.fill('rgba(120,120,120,1)');
          }
        }

        // Make eye move depending on the position of the mouse in the window
        pupil_render(wmx,wmy) {
          let ew = this.CW;
          let offset = this.CH - this.CW;
          let pw = this.pupilWidth;

          let windowW = p.windowWidth;
          let windowH = p.windowHeight;

          wmx < windowW * 0.3  ? wmx = windowW * 0.3  : void 0;
          wmx > windowW * 0.7  ? wmx = windowW * 0.7  : void 0;
          wmy < windowH * 0.3 ? wmy = windowH * 0.3 : void 0;
          wmy > windowH * 0.48 ? wmy = windowH * 0.48 : void 0;

          let x = wmx * (this.CW / windowW);
          let y = wmy * (this.CH / windowH) + offset;

          // CENTER mode
          x -= pw /2;
          y -= pw /2;


          // draw 
          p.rect(x , y, pw, pw);
        }

        eyelid_startBlink(trigger) {
          if (trigger) { this.setEyelid.restart(); }
        }

        eyelid_render(ew) {
          p.noStroke();
          p.fill('#FFB989');
          p.rect(0, this.CH-this.CW, ew, this.eye_lid.y);
        }



      }

      const randomBlink = function () {
        if (Math.random() < 0.5) {
          trigger = true;
        }
        setTimeout(randomBlink, 5000);
      }

    };
    let myp5 = new p5(sketch);
  }


  sendColor(color) {
    // this.bColorService.getColor(color);
  }

  opacityToZero(event) {
    this.isOpacity = false;
    this.id = event.target.id;
  }
  opacityToOne() {
    this.isOpacity = true;
  }

  opacityTo() {
    return this.id;
  }

  eyeBlink() {
    // this.eyeBlinkService.blink = true;
  }



}

function compareDate(a, b) {
  if (a.date < b.date)
    return -1;
  if (a.date > b.date)
    return 1;
  return 0;
}
