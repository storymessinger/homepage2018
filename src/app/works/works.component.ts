// import { Project } from '../shared/model/project';
// import { ProjectsService } from '../services/projects.service';
// import { BColorService } from './../services/b-color.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
declare var TweenLite, Power2: any;
declare var p5, TimelineMax, TweenMax, Power4;


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
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
    "name" : "Dustatic; window filter for your house",
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
      "smallimg" : "./../../assets/Works/2015_Banban/img/pic04-small.jpg"
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
  }, {
    "date" : 160501,
    "id" : 8,
    "list" : [ {
      "projectId" : 8,
      "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic01-small.jpg"
    }, {
      "projectId" : 8,
      "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic02-small.jpg"
    }, {
      "projectId" : 8,
      "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic03-small.jpg"
    } ],
    "name" : "Identity Design for STARTUP KAIST",
    "year" : 2016
  }, 
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
    }, null, {
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
    "name" : "Churros Printer : Food 3d print Machine",
    "year" : 2016
  }, {
    "date" : 20141101,
    "id" : 11,
    "name" : "Soundcloud Redesign Project",
    "year" : 2014
  }, {
    "date" : 20141001,
    "id" : 12,
    "name" : "Doradora; Interactive spinning game",
    "year" : 2014
  }
  // , 
  // {
  //   "date" : 20171201,
  //   "id" : 13,
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
      let widthOfEye = 70
      let blinkTheEye = false;

      p.setup = function () {
        let myCanvas = p.createCanvas(widthOfEye, widthOfEye + 3 / 8 * widthOfEye);
        myCanvas.parent('eyeContainer');
        eye = new Eye(widthOfEye);
        randomBlink();
      };

      p.mouseClicked = function () {
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
          blinkTheEye = true;
        }
      }

      p.draw = function () {
        p.background(0, 0, 0, 0);
        eye.update(blinkTheEye);
        eye.render();
        blinkTheEye = false;
      };


      class Eye {

        eyeWidth: number;
        highlight;
        setEyebrows;
        blinking;
        eye_lid = {
          y: 0,
          eyebrow: 0
        };

        constructor(EyeWidth: number) {
          this.eyeWidth = EyeWidth;
          this.highlight = '#F4FF69';
          this.blinking = false;

          this.setEyebrows = new TimelineMax({
              paused: true
            })
            .to(this.eye_lid, 0.4, {
              y: this.eyeWidth,
              eyebrow: 0,
              ease: Power4.easeOut
            })
            .to(this.eye_lid, 0.6, {
              y: 0,
              eyebrow: 0,
              ease: Power4.easeOut
            });
          // this.setEyebrows.repeat(-1).yoyo(true).repeatDelay(8).play();
          this.setEyebrows.play();

        }

        update(trigger) {
          if (trigger && !this.blinking) {
            this.setEyebrows.restart();
          }
        }

        eye_interaction() {

          // Make eye shine with hightlight colors
          if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
            if (p.frameCount % 10 == 0) {
              this.highlight = p.random(['#FF76DA', '#48F1FF', '#F4FF69']);
              p.fill(this.highlight);
            } else {
              p.fill(this.highlight);
            }
          } else {
            p.fill(120, 120, 120);
          }

          // Make eye move depending on the position of the mouse in the window
          let eye = this.eyeWidth;

          let MX = p.winMouseX;
          let MY = p.winMouseY;
          if (MX < p.windowWidth * 0.3) {
            MX = p.windowWidth * 0.3
          };
          if (MX > p.windowWidth * 0.7) {
            MX = p.windowWidth * 0.7
          };
          if (MY < p.windowHeight * 0.15) {
            MY = p.windowHeight * 0.15
          };
          if (MY > p.windowHeight * 0.26) {
            MY = p.windowHeight * 0.26
          };


          let x = MX * (p.width / p.windowWidth);
          let y = MY * (p.height / p.windowHeight) + eye / 8;
          p.rect(x - eye / 4, y - eye / 4 + 40, eye / 2, eye / 2);
        }


        render() {
          let w = this.eyeWidth;

          p.stroke(120, 120, 120);
          p.strokeWeight(4);

          p.line(w / 80 * 17, w / 80 * 18, w / 80 * 20, w / 80 * 30);
          p.line(w / 80 * 40, w / 80 * 15, w / 80 * 40, w / 80 * 30);
          p.line(w / 80 * 63, w / 80 * 18, w / 80 * 60, w / 80 * 30);
          // if( this.eye_lid.y < 20 ) {
          //   p.stroke(120,120,120);
          //   p.strokeWeight(4);
          //   p.line(15,15,20,30);
          //   p.line(40,12,40,40);
          //   p.line(65,15,60,30);
          // }
          // if( this.eye_lid.y > 60 ) {
          //   p.stroke(120,120,120);
          //   p.strokeWeight(4);
          //   p.line(15,115,20,110);
          //   p.line(40,120,40,110);
          //   p.line(65,115,60,110);
          // }

          p.noStroke();
          p.fill(250, 250, 250);
          p.rect(0, 0 + (3 / 8 * w), w, w);

          this.eye_interaction();

          p.noStroke();
          p.fill('#FFB989');
          p.rect(0, 0 + (3 / 8 * w), w, this.eye_lid.y);

        }

      }

      const randomBlink = function () {
        if (Math.random() < 0.5) {
          blinkTheEye = true;
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
