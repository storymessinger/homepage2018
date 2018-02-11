import { Component, OnInit, Input, HostListener } from '@angular/core';
declare var TweenLite, Power2:any;
declare var p5, TimelineMax, TweenMax, Power4;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() selectProject;
  click = false;;


  // @HostListener('window:resize') onresize() {
  //   console.log('resize');
  //   console.log(window.innerWidth);
  //   console.log(window.innerHeight);
  // }
  
  constructor(
    // private eyeBlinkService:EyeBlinkService
  ) { }


  ngOnInit() {
    let self = this;


    var sketch = function ( p) {

      let eye;
      let widthOfEye = 120;

      p.setup = function() {
        let myCanvas = p.createCanvas(widthOfEye, widthOfEye);
        myCanvas.parent('eyeContainer');
        eye = new Eye(widthOfEye);
      };

      p.draw = function() {
        // console.log(self.click);
        // eye.update(self.eyeBlinkService.blink);
        eye.render(widthOfEye);
        // self.eyeBlinkService.blink = false;
      };

      class Eye {

        constructor(width:number) {
          
        }

      }

    };
    let myp5 = new p5(sketch);
    




    var sketch2 = function( p ) {

      let eye;
      let widthOfEye = 120;

      let resizeEye = function() {
        if (p.windowWidth > 1553) {
          widthOfEye = 120;
        } else {
          widthOfEye = 100;
        }
      }

      p.windowResized = function() {
        resizeEye()
        p.resizeCanvas(widthOfEye, widthOfEye);
      }

      p.setup = function() {
        resizeEye();
        let myCanvas = p.createCanvas(widthOfEye, widthOfEye);
        // myCanvas.background(200);
        myCanvas.parent('eyeContainer');
        eye = new Eye(widthOfEye);

        randomBlink();
      };

      p.draw = function() {
        // console.log(self.click);
        // eye.update(self.eyeBlinkService.blink);
        eye.render(widthOfEye);
        // self.eyeBlinkService.blink = false;
      };

      const randomBlink = function () {
        if (Math.random() < 0.3) {
          // self.eyeBlinkService.blink = true;
        }
        setTimeout(randomBlink, 5000);
      }


      class Eye {
        R : number; 

        R_black : number;
        R_red : number;

        black = p.color(0,0,0);
        // red = p.color(250, 48, 48);
        // darkred = p.color(168, 4, 4);
        grey = p.color(80, 80, 80);
        darkgrey = p.color(160, 160, 160);
        white = p.color(255,255,255);

        white_eye = { y: 0, eyebrow: 0 };
        former_count = 0;

        setEyebrows;

        blinked = true;
        
        constructor(areaWidth:number) {
          this.R = areaWidth;
          this.R_black = 2*this.R * 1/2;
          this.R_red = 2*this.R * 3/8;
          // p.fill(this.black);
          p.noStroke();
          // p.ellipse(this.R, this.R, this.R_black );
          this.setEyebrows = new TimelineMax({paused:true})
            .to( this.white_eye, 1.5, { y: this.R * (3/5), eyebrow: this.R*(1/15), ease: Power4.easeOut } )
            .to( this.white_eye, 2, { y: 0 , eyebrow: 0, ease: Power4.easeIn } );
          // this.setEyebrows.repeat(-1).yoyo(true).repeatDelay(8).play();
          this.setEyebrows.play();
        }


        blink(){
          this.setEyebrows.restart();
        }

        update(clicked) {
          if (clicked && this.blinked) {
            this.blink();
          }
        }

        render(areaWidth: number) {

          if (areaWidth != this.R) {
            this.R = areaWidth;
          }

          let R_white= this.white_eye.y;
          let R_eyebrow = this.white_eye.eyebrow;

          p.fill(this.grey);
          p.ellipse(this.R/2, this.R/2, this.R_red );

          p.fill(this.darkgrey);
          p.ellipse(this.R/2,this.R/2, this.R_red, R_white+R_eyebrow);
          p.fill(this.white);
          p.ellipse(this.R/2, this.R/2, this.R_red-2, R_white);
          p.fill(this.black);
          p.ellipse(this.R/2, this.R/2, this.R*(1/25), R_white);
        }
      }
    };
    let myp52 = new p5(sketch);
  }

  eyeBlink(){
    // this.eyeBlinkService.blink = true;
  }

}
