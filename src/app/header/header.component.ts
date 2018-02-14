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
  // }
  
  constructor(
    // private eyeBlinkService:EyeBlinkService
  ) { }


  ngOnInit() {
    let self = this;


    var sketch = function ( p) {

      let eye;
      let widthOfEye = 80
      let blinkTheEye = false;

      p.setup = function() {
        let myCanvas = p.createCanvas(widthOfEye, widthOfEye+30+30);
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
          if( MY < p.windowHeight * 0.1) { MY = p.windowHeight * 0.1 };
          if( MY > p.windowHeight * 0.33) { MY = p.windowHeight * 0.33 };


          let x = MX * (p.width/p.windowWidth); 
          let y = MY * (p.height/p.windowHeight) + eye/8;
          p.rect(x-eye/4,y-eye/4 + 30,eye/2.2,eye/2.2);
        }


        render() {
          let w = this.eyeWidth;

            p.stroke(120,120,120);
            p.strokeWeight(4);
            p.line(17,18,20,30);
            p.line(40,15,40,40);
            p.line(63,18,60,30);
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
          p.rect(0,0 + 30, w, w);

          this.eye_interaction();

          p.noStroke();
          p.fill('#FFB989');
          p.rect(0,0 + 30,this.eyeWidth,this.eye_lid.y);

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

  eyeBlink(){
    // this.eyeBlinkService.blink = true;
  }

}