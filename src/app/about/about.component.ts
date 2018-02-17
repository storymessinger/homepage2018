import { Component, OnInit } from '@angular/core';

declare var p5, TimelineMax, TweenMax, Power4, ScrollMagic;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  el;
  fx;
  controller;

  constructor() {
    // this.el = document.querySelector('.text')
    // this.fx = new TextScramble(this.el)
  }

  ngOnInit() {

//     let self = this;

//     this.controller = new ScrollMagic.Controller();

//     new ScrollMagic.Scene({
//         offset: 200
//       })
//       .on('progress', function () {
//         // self.text_run('start');
//         setTimeout(self.text_run(`
//       Educational Background
// KAIST : Industrial Design & Mechanical Engineering / 2016
// KAIST : Industrial Design, Master Degree / 2018

// International Conference Papers
// CHI 2017, Consumer to Createor: How Households Buy Furniture to Inform Design and Fabrication interfaces (3rd author) / 2017

// Awards and Honors
// SKT ICT Vision Contest, 4th / 2014
// Korea Science Technology Innovation Contest, Grand Prize / 2014
// Spark Concept International Award, Finalist / 2015
//       `), 1000);
//       })
//       .addTo(this.controller);

//     new ScrollMagic.Scene({
//         triggerElement: "#test",
//         triggerHook: "onEnter"
//       })
//       .on('progress', function () {
//         setTimeout(self.text_run('progress'), 1000);
//         console.log('progress');
//       })
//       .addTo(this.controller);

//     new ScrollMagic.Scene({
//         triggerElement: "#test",
//         triggerHook: "onLeave"
//       })
//       .on('progress', function () {
//         setTimeout(self.text_run('done'), 1000);
//         // self.text_run('done');
//         console.log('done');
//       })
//       .addTo(this.controller);

  }

  // text_run(arg: string) {
  //   this.el = document.querySelector('.text')
  //   this.fx = new TextScramble(this.el)
  //   this.fx.setText(arg)
  // }


}

// class TextScramble {

//   el;
//   chars;
//   frame;
//   queue;
//   resolve;
//   frameRequest;

//   constructor(el) {
//     this.el = el;
//     this.chars = '!<>-_\\/[]{}—=+*^?#________'
//     this.update = this.update.bind(this)
//   }

//   setText(newText) {
//     const oldText = this.el.innerText
//     const length = Math.max(oldText.length, newText.length)
//     const promise = new Promise((resolve) => this.resolve = resolve)
//     this.queue = []
//     for (let i = 0; i < length; i++) {
//       const from = oldText[i] || ''
//       const to = newText[i] || ''
//       const start = Math.floor(Math.random() * 40)
//       const end = start + Math.floor(Math.random() * 40)
//       this.queue.push({
//         from,
//         to,
//         start,
//         end
//       })
//     }
//     cancelAnimationFrame(this.frameRequest)
//     this.frame = 0
//     this.update()
//     return promise
//   }
//   update() {
//     let output = ''
//     let complete = 0
//     for (let i = 0, n = this.queue.length; i < n; i++) {
//       let {
//         from,
//         to,
//         start,
//         end,
//         char
//       } = this.queue[i]
//       if (this.frame >= end) {
//         complete++
//         output += to
//       } else if (this.frame >= start) {
//         if (!char || Math.random() < 0.15) {
//           char = this.randomChar()
//           this.queue[i].char = char
//         }
//         output += `<span class="dud">${char}</span>`
//       } else {
//         output += from
//       }
//     }
//     this.el.innerHTML = output
//     if (complete === this.queue.length) {
//       this.resolve()
//     } else {
//       this.frameRequest = requestAnimationFrame(this.update)
//       this.frame++
//     }
//   }
//   randomChar() {
//     return this.chars[Math.floor(Math.random() * this.chars.length)]
//   }
// }
