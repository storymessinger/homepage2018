import { Injectable } from '@angular/core';
declare var TweenLite, Power2:any;
declare var p5, TimelineMax, TweenMax, Power4;

@Injectable()
export class BackgroundService {

  constructor() { }

  backgroundCanvas(parent,col,wid) {
    let self = this;

    var sketch = function ( p ) {
      p.windowResized = function() {
        p.resizeCanvas(p.windowWidth * wid, p.windowHeight);
      } 
      p.setup = function() {
        let myCanvas = p.createCanvas(p.windowWidth * wid, p.windowHeight);
        myCanvas.parent(parent);
        // myCanvas.parent('back');
        myCanvas.elt.style.position = "fixed"; 
        // myCanvas.style('z-index', '-2');
        // position the canvas to fixed     };
        // boxes = new Boxes(p.windowWidth, p.windowHeight, time);
      }


      class Eye {
        private shape_choice : string[] = ['gray', 'white'] 
        shape: string;
        sizeVal : number; // 40 < n < 100
        x_0 : number;
        x : number;
        y : number;
        angle : number;
        upVal : number;
        sideVal : number;
        //
        sideAcc_0: number = 0;
        //
        sideAcc : number;
        angleAcc ; number; 

        cX : number;
        cY : number;

        highlight: string;

        first : boolean = true;

        constructor(windowWidth:number, windowHeight:number) {
          this.cX = windowWidth;
          this.cY = windowHeight;
          this.setup();
        }

        setup(){

          this.shape = this.shape_choice[Math.floor(Math.random() * this.shape_choice.length)];
          this.sizeVal = this.getRandom(8, 8); // Size of shpaes
          this.upVal = this.getRandom(0.2, 0.4); // going up speed
          this.sideVal = this.getRandom(0.5, 0.5); // going left or right speed
          this.sideAcc = this.getRandom(0.1, 0.25); // sideways frequency
          this.angleAcc = this.getRandom(0.3, 0.4);
          this.highlight = p.random(['#FF76DA','#48F1FF'])
          
          if ( this.first === true ) {
            this.x_0 = this.getRandom(this.sizeVal, this.cX - this.sizeVal);
            this.y = this.getRandom(this.sizeVal, this.cY - this.sizeVal);
            this.angle = this.getRandom(20, 70);
            this.first = false;
          } else {
            this.x_0 = this.getRandom(this.sizeVal, this.cX - this.sizeVal);
            this.y = this.cY + this.sizeVal;
            this.angle = this.getRandom(20, 70);
          }
          
          this.x = this.x_0;

        }

        render() {
          // random out of 3 - switch

          switch(this.shape){
            case 'gray' :
            this.rSquare(this.x,this.y, this.sizeVal, this.angle, '#BABABA');
            break;
            
            case 'white' :
            this.rSquare(this.x,this.y, this.sizeVal, this.angle, '#FFFFFF');
            break;
          }

          this.move()
        }

        move() {
          //update x
          this.sideAcc_0 = this.sideAcc_0 + this.sideAcc;
          this.x = this.x_0 + 15 * Math.sin(this.sideAcc_0/180*Math.PI)
          
          //update y
          this.y = this.y - this.upVal;

          //update angle
          this.angle = this.angle + this.angleAcc;

          if ( (this.x - this.sizeVal) > this.cX || (this.y + this.sizeVal) < 0 ) {
            this.setup();
          } else { }
        }

        rSquare(x,y,size,angle,color) {
          p.noStroke();

          if(p.mouseX > x-30 && p.mouseX < x+30 ) {
            p.fill(this.highlight);
          } else {
            p.fill(color);
          }

          let A = 0.8*size*Math.cos(angle*Math.PI/180);
          let B = 0.8*size*Math.sin(angle*Math.PI/180);

          let x1 = x - A;
          let y1 = y - B;
          let x2 = x + B;
          let y2 = y - A;
          let x3 = x + A;
          let y3 = y + B;
          let x4 = x - B;
          let y4 = y + A;

          p.quad(x1,y1,x2,y2,x3,y3,x4,y4);

        }

        // rCircleShadow(x,y,size,angle) {
        //   p.fill(0,0,0,75);
        //   p.noStroke();
        //   p.ellipse(x+3,y+3,size,size);

        // }

        // rTriangle(x,y,size,angle) {
        //   p.stroke(50,50,50,80);
        //   // p.noStroke();

        //   let alpha = angle;
        //   let beta = 60 - angle;
        //   let theta = 120 - angle;
          
        //   p.triangle(
        //     x-0.75*size*Math.cos(theta/180*Math.PI),
        //     y+0.75*size*Math.sin(theta/180*Math.PI),
        //     x-0.75*size*Math.cos(alpha/180*Math.PI),
        //     y-0.75*size*Math.sin(alpha/180*Math.PI),
        //     x+0.75*size*Math.cos(beta/180*Math.PI),
        //     y-0.75*size*Math.sin(beta/180*Math.PI)
        //   )
        // }

        getRandom(min, max) {
          return (Math.random() * (max - min)) + min;
        }

      }

      class EyeGroup {

        private eyeNum : number;
        eyeArr : any[] = [];
        
        constructor(eyeNum : number) {
          this.eyeNum = eyeNum;
          this.start();
        }

        start() {
          for (let i = 0; i < this.eyeNum; i++ ) {
            this.eyeArr[i] = new Eye(p.windowWidth, p.windowHeight);
          }
        }

        // draw() {
        //   this.eyeArr.forEach( item => item.render());
        // }

      }
      
      let testEyes = new EyeGroup(40);
      
      p.draw = function() {
        // p.background(255,255,255);
        p.background(col);
        testEyes.eyeArr.forEach( item => item.render());
      }
    }
      
    let myp5 = new p5(sketch);
  }
}
