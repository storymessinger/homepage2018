import { Component, OnInit } from '@angular/core';

declare var p5, TimelineMax, TweenMax;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {

  }
  
  model = new Msg('jundong@gmail.com', 'yours@email.com', 'hello','write here');
  submitted = false;
  onSubmit() { this.submitted = true };

  get diagnostic() { return JSON.stringify(this.model)};

  ngOnInit() {
    this.MovingBox('main-boxes-1');
    this.MovingBox('main-boxes-2');
    // this.MovingBox('main-boxes-3');
  }


  MovingBox(elementID) {

    let self = this;

    var sketch = function ( p ) {
      let myCanvas;
      let box;

      p.setup = function(){
        myCanvas = p.createCanvas(30,70);
        myCanvas.parent(elementID);
        box = new Box(8);
      }

      p.draw = function () {
        p.background('#333333');
        box.render();
      }


      class Box {
        
        size;
        options;
        from;
        to;

        constructor(Size) {
          this.size= Size;
          p.colorMode(p.HSB, 100);
          this.from = p.color(88, 54, 100);
          this.to = p.color(52, 72, 100);
          this.options = { angle: 0, C:0, Y:8 };
          
          TweenMax.to(this.options, 6, { C:1, angle: 315, Y:62, repeat: -1, repeatDelay: 10 } )
        }

        render() {
          this.rSquare( 8, this.options.Y, this.options.angle, this.options.C );
        }
      
        rSquare(x,y,angle,color) {
          p.noStroke();
          p.fill(p.lerpColor(this.from, this.to, color))
          // p.fill(this.options.H, this.options.S, this.options.B);

          // if(p.mouseX > x-50 && p.mouseX < x+50 && p.mouseY > y - 50 && p.mouseY < y + 50) {
          // if(p.mouseX > x-30 && p.mouseX < x+30) {
          //   p.fill(this.highlight);
          // } else {
          //   p.fill(color);
          // }

          let A = 0.8*this.size*Math.cos(angle*Math.PI/180);
          let B = 0.8*this.size*Math.sin(angle*Math.PI/180);

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
      }

    }

    let myp5 = new p5(sketch);

  }


}

export class Msg {
  constructor(
    public to : string,
    public from : string,
    public subject: string,
    public message : string
  ) {  }

}