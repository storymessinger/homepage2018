// import { Project } from '../shared/model/project';
// import { ProjectsService } from '../services/projects.service';
// import { BColorService } from './../services/b-color.service';
import { Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
declare var TweenLite, Power2:any;
declare var p5, TimelineMax, TweenMax, Power4;


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  private isOpacity:any;
  private id:number;

  white = 'rgba(255,255,255,0.25)'

  projects = 
  [ 
    {
    "description" : "Evening Primrose is an interactive lamp. The concept is fundamentally based on the Korean novel, where scenery of flowers beneath the moonlight is beautifully described. This lamp let people understand what they lose when they disturb the quiet, solemn atmosphere.",
    "id" : 1,
    "list" : [ {
      "bigimg" : "./../../assets/Works/2014_Primrose/img/pic01-big.jpg",
      "color" : "rgba(52,52,52,0.9)",
      "projectId" : 1,
      "smallimg" : "./../../assets/Works/2014_Primrose/img/pic01-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2014_Primrose/img/pic02-big.jpg",
      "color" : "rgba(52,52,52,0.9)",
      "projectId" : 1,
      "smallimg" : "./../../assets/Works/2014_Primrose/img/pic02-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2014_Primrose/img/pic03-big.jpg",
      "color" : "rgba(52,52,52,0.9)",
      "projectId" : 1,
      "smallimg" : "./../../assets/Works/2014_Primrose/img/pic03-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2014_Primrose/img/pic04-big.jpg",
      "color" : "rgba(52,52,52,0.9)",
      "projectId" : 1,
      "smallimg" : "./../../assets/Works/2014_Primrose/img/pic04-small.jpg"
    } ],
    "month" : 11,
    "name" : "Primrose",
    "url" : "Primrose",
    "year" : 2014
  }, {
    "description" : "Redesigning the Soundcloud app started out with an appluase for the beautiful design, and a  big complain about the usability. It became clear through the user test that the app itself, though beautifully made, has been made without the consideration of user's interactions. ",
    "id" : 2,
    "list" : [ {
      "bigimg" : "./../../assets/Works/2014_SoundCloudProject/img/pic01-big.jpg",
      "color" : "#f36d43",
      "projectId" : 2,
      "smallimg" : "./../../assets/Works/2014_SoundCloudProject/img/pic01-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2014_SoundCloudProject/img/pic02-big.jpg",
      "color" : "#f36d43",
      "projectId" : 2,
      "smallimg" : "./../../assets/Works/2014_SoundCloudProject/img/pic02-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2014_SoundCloudProject/img/pic03-big.jpg",
      "color" : "#f36d43",
      "projectId" : 2,
      "smallimg" : "./../../assets/Works/2014_SoundCloudProject/img/pic03-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2014_SoundCloudProject/img/pic04-big.jpg",
      "color" : "#f36d43",
      "projectId" : 2,
      "smallimg" : "./../../assets/Works/2014_SoundCloudProject/img/pic04-small.jpg"
    } ],
    "month" : 11,
    "name" : "SoundCloud Redesign Project",
    "url" : "SoundCloud",
    "year" : 2014
  }, {
    "description" : "An media art project held in the winter of 2014. A neon signage was lit bright when the first snow came to the campus of KAIST.",
    "id" : 3,
    "list" : [ {
      "bigimg" : "./../../assets/Works/2014_FirstSnow/img/pic01-big.jpg",
      "color" : "rgba(215, 215, 215, 0.81)",
      "projectId" : 3,
      "smallimg" : "./../../assets/Works/2014_FirstSnow/img/pic01-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2014_FirstSnow/img/pic02-big.jpg",
      "color" : "rgba(215, 215, 215, 0.81)",
      "projectId" : 3,
      "smallimg" : "./../../assets/Works/2014_FirstSnow/img/pic02-small.jpg"
    } ],
    "month" : 12,
    "name" : "First Snow Art Project",
    "url" : "FirstSnow",
    "year" : 2014
  }, {
    "description" : "This product is a small shelter for the stray cats, placed at the parking space. When somebody parks the car over the product, the car's leftover heat is transferred to the inside of the shelter, which keeps stray cats warm and help them withstand the harsh, cold winter weather.",
    "id" : 4,
    "list" : [ {
      "bigimg" : "./../../assets/Works/2015_CatShelter/img/pic01-big.jpg",
      "color" : "#e0deeb",
      "projectId" : 4,
      "smallimg" : "./../../assets/Works/2015_CatShelter/img/pic01-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2015_CatShelter/img/pic02-big.jpg",
      "color" : "#e0deeb",
      "projectId" : 4,
      "smallimg" : "./../../assets/Works/2015_CatShelter/img/pic02-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2015_CatShelter/img/pic03-big.jpg",
      "color" : "#e0deeb",
      "projectId" : 4,
      "smallimg" : "./../../assets/Works/2015_CatShelter/img/pic03-small.jpg"
    } ],
    "month" : 5,
    "name" : "CatShelter Concept",
    "url" : "CatShelter",
    "year" : 2015
  }, {
    "description" : "This is an app design for students who live alone, named 'banban'. <br><br>The target user, a student, will use this application when he wants to order a chicken but not cannot find a friend who can order it with him. ",
    "id" : 5,
    "list" : [ {
      "bigimg" : "./../../assets/Works/2015_Banban/img/pic01-big.jpg",
      "color" : "#e54038",
      "projectId" : 5,
      "smallimg" : "./../../assets/Works/2015_Banban/img/pic01-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2015_Banban/img/pic02-big.jpg",
      "color" : "#e54038",
      "projectId" : 5,
      "smallimg" : "./../../assets/Works/2015_Banban/img/pic02-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2015_Banban/img/pic03-big.jpg",
      "color" : "#e54038",
      "projectId" : 5,
      "smallimg" : "./../../assets/Works/2015_Banban/img/pic03-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2015_Banban/img/pic04-big.jpg",
      "color" : "#e54038",
      "projectId" : 5,
      "smallimg" : "./../../assets/Works/2015_Banban/img/pic04-small.jpg"
    } ],
    "month" : 6,
    "name" : "BanBan App Project (Naver UXDP)",
    "url" : "BanBan",
    "year" : 2015
  }, {
    "description" : "A paper which got accepted to the CHI conference of 2016. This paper is based on long term ethnography which involved 16 families, planning to buy a furniture for thier house.",
    "id" : 6,
    "list" : [ {
      "bigimg" : "./../../assets/Works/2016_ConsumerToCreator/img/pic01-big.jpg",
      "color" : "rgba(255,255,255,0.8)",
      "projectId" : 6,
      "smallimg" : "./../../assets/Works/2016_ConsumerToCreator/img/pic01-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2016_ConsumerToCreator/img/pic02-big.jpg",
      "color" : "rgba(255,255,255,0.8)",
      "projectId" : 6,
      "smallimg" : "./../../assets/Works/2016_ConsumerToCreator/img/pic02-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2016_ConsumerToCreator/img/pic03-big.jpg",
      "color" : "rgba(255,255,255,0.8)",
      "projectId" : 6,
      "smallimg" : "./../../assets/Works/2016_ConsumerToCreator/img/pic03-small.jpg"
    } ],
    "month" : 10,
    "name" : "Consumer to Creator(CHI 16', 3rd author)",
    "url" : "ConsumerToCreator",
    "year" : 2016
  }, {
    "description" : "Interactive toy, ‘Musical Train’. Kids can attach ‘MusicalTrain’ notes to their IKEA train set to play with music as well as learn",
    "id" : 7,
    "list" : [ {
      "bigimg" : "./../../assets/Works/2016_MusicalTrain/img/pic01-big.jpg",
      "color" : "rgba(250, 200, 125, 1)",
      "projectId" : 7,
      "smallimg" : "./../../assets/Works/2016_MusicalTrain/img/pic01-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2016_MusicalTrain/img/pic02-big.jpg",
      "color" : "rgba(250, 200, 125, 1)",
      "projectId" : 7,
      "smallimg" : "./../../assets/Works/2016_MusicalTrain/img/pic02-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2016_MusicalTrain/img/pic03-big.jpg",
      "color" : "rgba(250, 200, 125, 1)",
      "projectId" : 7,
      "smallimg" : "./../../assets/Works/2016_MusicalTrain/img/pic03-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2016_MusicalTrain/img/pic04-big.jpg",
      "color" : "rgba(250, 200, 125, 1)",
      "projectId" : 7,
      "smallimg" : "./../../assets/Works/2016_MusicalTrain/img/pic04-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2016_MusicalTrain/img/pic05-big.jpg",
      "color" : "rgba(250, 200, 125, 1)",
      "projectId" : 7,
      "smallimg" : "./../../assets/Works/2016_MusicalTrain/img/pic05-small.jpg"
    } ],
    "month" : 6,
    "name" : "Musical Train : IKEA-Hack for Children to play with music",
    "url" : "MusicalTrain",
    "year" : 2016
  }, {
    "description" : "Logo Identity design for 'Startup KAIST'.",
    "id" : 8,
    "list" : [ {
      "bigimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic01-big.jpg",
      "color" : "#f26a6d",
      "projectId" : 8,
      "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic01-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic02-big.jpg",
      "color" : "#f26a6d",
      "projectId" : 8,
      "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic02-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic03-big.jpg",
      "color" : "#f26a6d",
      "projectId" : 8,
      "smallimg" : "./../../assets/Works/2016_StartupKaistLogo/img/pic03-small.jpg"
    } ],
    "month" : 5,
    "name" : "Startup KAIST Identity Design",
    "url" : "StartupKaistLogo",
    "year" : 2016
  }, {
    "description" : "Website and Identity Design for a Korean startup company,' IROBO'",
    "id" : 9,
    "list" : [ {
      "bigimg" : "./../../assets/Works/2015_iRoboIdentity/img/pic01-big.jpg",
      "color" : "#3d6fb7",
      "projectId" : 9,
      "smallimg" : "./../../assets/Works/2015_iRoboIdentity/img/pic01-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2015_iRoboIdentity/img/pic02-big.jpg",
      "color" : "#3d6fb7",
      "projectId" : 9,
      "smallimg" : "./../../assets/Works/2015_iRoboIdentity/img/pic02-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2015_iRoboIdentity/img/pic03-big.jpg",
      "color" : "#3d6fb7",
      "projectId" : 9,
      "smallimg" : "./../../assets/Works/2015_iRoboIdentity/img/pic03-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2015_iRoboIdentity/img/pic04-big.jpg",
      "color" : "#3d6fb7",
      "projectId" : 9,
      "smallimg" : "./../../assets/Works/2015_iRoboIdentity/img/pic04-small.jpg"
    } ],
    "month" : 8,
    "name" : "iRobo Identity Design",
    "url" : "iRoboIdentity",
    "year" : 2015
  }, {
    "description" : "Food 3D printer which focus on making your own custom churros. By using this machine, users can actually print out the custom-shaped churros and fry it accordingly.",
    "id" : 10,
    "list" : [ {
      "bigimg" : "./../../assets/Works/2016_ChurrosPrinter/img/pic01-big.jpg",
      "color" : "#d6d6d6",
      "projectId" : 10,
      "smallimg" : "./../../assets/Works/2016_ChurrosPrinter/img/pic01-small.jpg"
    }, {
      "bigimg" : "./../../assets/Works/2016_ChurrosPrinter/img/pic02-big.jpg",
      "color" : "#d6d6d6",
      "projectId" : 10,
      "smallimg" : "./../../assets/Works/2016_ChurrosPrinter/img/pic02-small.jpg"
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
    "month" : 8,
    "name" : "Churros Printer : Food Frying Machine",
    "url" : "ChurrosPrinter",
    "year" : 2016
  } ]



  constructor(
    // private bColorService:BColorService 
    // private projectService:ProjectsService
  ) { 
  }

  ngOnInit() {
    // this.bColorService.getColor('#dddddd');
    // this.projects$ = this.projectService.findAllProjects();
    let self = this;

    var sketch = function ( p) {

      let eye;
      let widthOfEye = 70
      let blinkTheEye = false;

      p.setup = function() {
        let myCanvas = p.createCanvas(widthOfEye, widthOfEye + 3/8*widthOfEye);
        myCanvas.parent('eyeContainer');
        eye = new Eye(widthOfEye);
        randomBlink();
      };

      p.mouseClicked = function() {
        if( p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
          blinkTheEye = true;
        }
      }

      p.draw = function() {
        p.background(0,0,0,0);
        eye.update(blinkTheEye);
        eye.render();
        blinkTheEye = false;
      };


      class Eye {

        eyeWidth:number;
        highlight;
        setEyebrows;
        blinking;
        eye_lid = { y: 0, eyebrow: 0 };

        constructor(EyeWidth:number) {
          this.eyeWidth = EyeWidth;
          this.highlight = '#F4FF69';
          this.blinking = false;
          
          this.setEyebrows = new TimelineMax({paused:true})
            .to( this.eye_lid, 0.4, { y: this.eyeWidth, eyebrow: 0, ease: Power4.easeOut } )
            .to( this.eye_lid, 0.6, { y: 0 , eyebrow: 0, ease: Power4.easeOut } );
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
          if( p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
            if (p.frameCount % 10 == 0) {
              this.highlight = p.random(['#FF76DA','#48F1FF','#F4FF69']);
              p.fill(this.highlight);
            } else {
              p.fill(this.highlight);
            }
          } else {
            p.fill(120,120,120);
          }

          // Make eye move depending on the position of the mouse in the window
          let eye = this.eyeWidth;

          let MX = p.winMouseX;
          let MY = p.winMouseY;
          if( MX < p.windowWidth * 0.3) { MX = p.windowWidth * 0.3 };
          if( MX > p.windowWidth * 0.7) { MX = p.windowWidth * 0.7 };
          if( MY < p.windowHeight * 0.15) { MY = p.windowHeight * 0.15 };
          if( MY > p.windowHeight * 0.26) { MY = p.windowHeight * 0.26 };


          let x = MX * (p.width/p.windowWidth); 
          let y = MY * (p.height/p.windowHeight) + eye/8;
          p.rect(x-eye/4,y-eye/4 + 40, eye/2, eye/2);
        }


        render() {
          let w = this.eyeWidth;

          p.stroke(120,120,120);
          p.strokeWeight(4);

          p.line(w/80*17,w/80*18,w/80*20,w/80*30);
          p.line(w/80*40,w/80*15,w/80*40,w/80*30);
          p.line(w/80*63,w/80*18,w/80*60,w/80*30);
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
          p.fill(250,250,250);
          p.rect(0,0 + (3/8*w), w, w);

          this.eye_interaction();

          p.noStroke();
          p.fill('#FFB989');
          p.rect(0,0 + (3/8*w),w,this.eye_lid.y);
          
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


  sendColor(color){
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
  
  eyeBlink(){
    // this.eyeBlinkService.blink = true;
  }



}
