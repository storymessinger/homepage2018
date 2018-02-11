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
        let myCanvas = p.createCanvas(widthOfEye, widthOfEye);
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
        p.background(5,5,5);
        eye.update(blinkTheEye);
        eye.render();
        blinkTheEye = false;
      };


      class Eye {

        width:number;
        highlight;
        setEyebrows;
        blinking;
        eye_lid = { y: 0, eyebrow: 0 };

        constructor(width:number) {
          this.width = width;
          this.highlight = '#F4FF69';
          this.blinking = false;
          
          this.setEyebrows = new TimelineMax({paused:true})
            .to( this.eye_lid, 0.4, { y: this.width, eyebrow: 0, ease: Power4.easeOut } )
            .to( this.eye_lid, 0.6, { y: 0 , eyebrow: 0, ease: Power4.easeOut } );
          // this.setEyebrows.repeat(-1).yoyo(true).repeatDelay(8).play();
          this.setEyebrows.play();

        }

        update(trigger) {
          if (trigger && !this.blinking) {
            this.setEyebrows.restart();
          }
        }

        dongza() {
          let w = this.width;
          let MX = p.winMouseX;
          let MY = p.winMouseY;
          if( MX < p.windowWidth / 3) { MX = p.windowWidth / 3 };
          if( MX > p.windowWidth * 2/3) { MX = p.windowWidth * 2/3 };
          if( MY > p.windowHeight / 3.5) { MY = p.windowHeight / 3.5 };
          
          let x = MX * (p.width/p.windowWidth);
          let y = MY * (p.height/p.windowHeight) + w/2.5;


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

          p.rect(x-w/4,y-w/4,w/2,w/2);
        }


        render() {
          let w = this.width;
          p.noStroke();
          p.fill(255,255,255);
          p.rect(0,0,w,w);

          this.dongza();
          
          p.noStroke();
          p.fill('#FFB989');
          p.rect(0,0,this.width,this.eye_lid.y);
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