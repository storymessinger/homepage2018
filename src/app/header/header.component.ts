import { Component, OnInit, Input, HostListener } from '@angular/core';
declare var p5, TimelineMax, TweenMax, ScrollMagic;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() selectProject;
  click = false;;

  constructor(
    // private eyeBlinkService:EyeBlinkService
  ) { 
  }


  ngOnInit() {
    const phrases = [
      'JUNDONG',
      'DESIGNER',
      'GREETINGS'
    ]
    
    const el = document.querySelector('.text')
    const fx = new TextScramble(el)
    
    let counter = 0
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 20000)
      })
      counter = (counter + 1) % phrases.length
    }
    
    next()

    // let self = this;

    // this.controller = new ScrollMagic.Controller();

    // new ScrollMagic.Scene({
    //     offset: 200
    //   })
    //   .on('progress', function () {
    //     // self.text_run('start');
    //     self.text_run(`start`), 1000;
    //   })
    //   .addTo(this.controller);

    // new ScrollMagic.Scene({
    //     triggerElement: "#test",
    //     triggerHook: "onEnter"
    //   })
    //   .on('progress', function () {
    //     self.text_run('progress'), 1000;
    //     console.log('progress');
    //   })
    //   .addTo(this.controller);

    // new ScrollMagic.Scene({
    //     triggerElement: "#test",
    //     triggerHook: "onLeave"
    //   })
    //   .on('progress', function () {
    //     self.text_run('done'), 1000;
    //     // self.text_run('done');
    //     console.log('done');
    //   })
    //   .addTo(this.controller);

  }

  // text_run(arg: string) {
  //   this.el = document.querySelector('.text')
  //   this.fx = new TextScramble(this.el)
  //   this.fx.setText(arg)
  // }

  eyeBlink(){
    // this.eyeBlinkService.blink = true;
  }
}


class TextScramble {

  el;
  chars;
  frame;
  queue;
  resolve;
  frameRequest;

  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }

  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({
        from,
        to,
        start,
        end
      })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let {
        from,
        to,
        start,
        end,
        char
      } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.15) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}