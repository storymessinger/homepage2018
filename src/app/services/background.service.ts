import { Injectable } from '@angular/core';
declare var TweenLite, Power2:any;
declare var p5, TimelineMax, TweenMax, Power4;

@Injectable()
export class BackgroundService {

  constructor() { }

  backgroundCanvas(parent, backgroundColor, Xwidth, color1, color2, number) {
    const self = this;

    const sketch = function ( p ) {

      let eyesInstance;

      p.windowResized = function() {
        p.resizeCanvas(p.windowWidth * Xwidth, p.windowHeight);
      };

      p.setup = function() {
        const myCanvas = p.createCanvas(p.windowWidth * Xwidth, p.windowHeight);
        myCanvas.parent(parent);
        myCanvas.elt.style.position = 'fixed'; 

        eyesInstance = new BoxGroup(number, color1, color2);
      };

      p.draw = function() {
        p.background(backgroundColor);
        // eyesInstance.eyeArr.forEach( eye => eye.render());
        eyesInstance.draw();
      };

      class Box {
        private shape_choice: string[] = ['gray', 'white'];
        shape: string;
        sizeVal: number; // 40 < n < 100
        x_0: number;
        x: number;
        y: number;
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

        boxColor1 : string;
        boxColor2 : string;
        
        constructor(windowWidth:number, windowHeight:number, col1, col2) {
          this.cX = windowWidth;
          this.cY = windowHeight;
          this.boxColor1 = col1;
          this.boxColor2 = col2;
          this.setup();
        }

        setup(){

          this.shape = this.shape_choice[Math.floor(Math.random() * this.shape_choice.length)];
          this.sizeVal = this.getRandom(8, 8); // Size of shpaes
          this.upVal = this.getRandom(0.2, 0.4); // going up speed
          this.sideVal = this.getRandom(0.5, 0.5); // going left or right speed
          this.sideAcc = this.getRandom(0.1, 0.25); // sideways frequency
          this.angleAcc = this.getRandom(0.3, 0.4);
          this.highlight = p.random(['#FF76DA','#48F1FF']);
          
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
            this.rSquare(this.x,this.y, this.sizeVal, this.angle, this.boxColor1);
            break;
            case 'white' :
            this.rSquare(this.x,this.y, this.sizeVal, this.angle, this.boxColor2);
            break;
          }

          this.move()
        }

        move() {
          // update x
          this.sideAcc_0 = this.sideAcc_0 + this.sideAcc;
          this.x = this.x_0 + 15 * Math.sin(this.sideAcc_0/180* Math.PI)
          // update y
          this.y = this.y - this.upVal;

          // update angle
          this.angle = this.angle + this.angleAcc;

          if ( (this.x - this.sizeVal) > this.cX || (this.y + this.sizeVal) < 0 ) {
            this.setup();
          } else { }
        }

        rSquare(x ,y, size, angle, color) {
          p.noStroke();

          // if(p.mouseX > x-50 && p.mouseX < x+50 && p.mouseY > y - 50 && p.mouseY < y + 50) {
          if (p.mouseX > x - 30 && p.mouseX < x + 30) {
            p.fill(this.highlight);
          } else {
            p.fill(color);
          }

          const A = 0.8 * size * Math.cos(angle * Math.PI / 180);
          const B = 0.8 * size * Math.sin(angle * Math.PI / 180);

          const x1 = x - A;
          const y1 = y - B;
          const x2 = x + B;
          const y2 = y - A;
          const x3 = x + A;
          const y3 = y + B;
          const x4 = x - B;
          const y4 = y + A;

          p.quad(x1,y1,x2,y2,x3,y3,x4,y4);

        }

        getRandom(min, max) {
          return (Math.random() * (max - min)) + min;
        }

      }

      class BoxGroup {

        eyeArr : any[] = [];
        col1 : string;
        col2: string;

        constructor(eyeNum : number, color1, color2) {
          this.col1 = color1;
          this.col2 = color2;
          this.start(eyeNum);
        }

        start(num) {

          for (let i = 0; i < num; i++ ) {
            this.eyeArr[i] = new Box(p.windowWidth, p.windowHeight, this.col1, this.col2 );
          }
        }

        draw() {
          this.eyeArr.forEach( item => item.render());
        }

      }


    };

    const myp5 = new p5(sketch);
  }
}
