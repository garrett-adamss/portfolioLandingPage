
// SECTION Text Scramble
class TextScramble {
  constructor(el) {
    this.el = el
    // this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.chars = 'asdfghjklqwertyuiopzxcv'
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
      this.queue.push({ from, to, start, end })
    }
    // @ts-ignore
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    // @ts-ignore
    for (let i = 0, n = this.queue?.length; i < n; i++) {
      // @ts-ignore
      let { from, to, start, end, char } = this.queue[i]
      // @ts-ignore
      if (this.frame >= end) {
        complete++
        output += to
        // @ts-ignore
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          // @ts-ignore
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue?.length) {
      // @ts-ignore
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      // @ts-ignore
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// Text
const phrases = [
  'with an eye for design',
  'looking for an opportunity',
  'with an eagerness to learn',
  'that loves a challenge',
  'who\'s always learning something new'

]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 2500)
  })
  counter = (counter + 1) % phrases.length
}

next()

//SECTION Parallax Scrolls

// About
let aboutTitle = document.getElementById('about-title')
let aboutText = document.getElementById('about-text')

// Project Section Title
let projectSectionTitle = document.getElementById('project-section-title')

// Project Text One
let projectOneText = document.getElementById('project-one-text')

//Project Photos One
let projectOneImgOne = document.getElementById('project-one-img-one')
let projectOneImgTwo = document.getElementById('project-one-img-two')
let projectOneImgThree = document.getElementById('project-one-img-three')
let projectOneImgFour = document.getElementById('project-one-img-four')

// Project Text Two
let projectTwoText = document.getElementById('project-two-text')

//Project Photos Two
let projectTwoImgOne = document.getElementById('project-two-img-two')
let projectTwoImgTwo = document.getElementById('project-two-img-two')
let projectTwoImgThree = document.getElementById('project-two-img-three')
let projectTwoImgFour = document.getElementById('project-two-img-four')

//Skills 
let skillsTitle = document.getElementById('skills-title')

//Contact
let contactTitle = document.getElementById('contact-title')

window.addEventListener('scroll', function () {
  let pxValue = window.scrollY; //px

  let viewValue = (100 * (window.scrollY)) / window.innerHeight
  console.log("[viewValue in vh] :", viewValue)
  // ABOUT
  if (viewValue <= 90) {
    // @ts-ignore
    aboutText.style.right = ((viewValue * .15) - 2.5) + 'vw'
  }
  // @ts-ignore
  aboutTitle.style.left = ((viewValue * .15)) + 'vw'
  // @ts-ignore
  projectSectionTitle.style.right = ((viewValue * .2) - 15) + "vw"

  //PROJECT ONE
  if (viewValue >= 205 && viewValue < 360) {
    { // NOTE //text
      // @ts-ignore
      projectOneText.style.top = ((viewValue - 205)) + 'vh'
      //photos
      // @ts-ignore Title //56
      projectOneImgOne.style.top = (((viewValue) * .3) - ((205 * .3) - 25)) + 'vh';
      // @ts-ignore Title //61
      projectOneImgTwo.style.top = (((viewValue) * .25) - ((205 * .25) - 81)) + 'vh'
      // @ts-ignore Title //31
      projectOneImgThree.style.top = (((viewValue) * .4) - ((205 * .4) - 51)) + 'vh'
      // @ts-ignore Title //104
      projectOneImgFour.style.top = (((viewValue) * .45) - ((205 * .45) - 94)) + 'vh'
    }
  }
  //Project Two
  if (viewValue >= 447 && viewValue < 592) {
    console.log("RUNNING PROJECT TWO");
    { // NOTE Text
      // @ts-ignore
      projectTwoText.style.top = ((viewValue - 447)) + 'vh'
      //photoe
      // @ts-ignore Title //56
      projectTwoImgOne.style.top = ((viewValue * .3) - ((447 * .3) - 25)) + 'vh';
      // @ts-ignore Title //61
      projectTwoImgTwo.style.top = ((viewValue * .25) - ((447 * .25) - 81)) + 'vh'
      // @ts-ignore Title //31
      projectTwoImgThree.style.top = ((viewValue * .4) - ((447 * .4) - 51)) + 'vh'
      // @ts-ignore Title //104
      projectTwoImgFour.style.top = ((viewValue * .45) - ((447 * .45) - 94)) + 'vh'
    }
  }
  //SKILLS 
  if (viewValue >= 640) {
    console.log("skills slider");
    // @ts-ignore
    skillsTitle.style.left = ((viewValue * .9) - ((640 * .9) + 20)) + 'vw'
    // @ts-ignore
    contactTitle.style.right = ((viewValue * .9) - ((640 * .9) + 70)) + 'vw'
  }
})

window.addEventListener("touchmove", function (){
  console.log('touchmove working')
  let viewValue = (100 * (window.scrollY)) / window.innerHeight
  console.log("[viewValue in vh] :", viewValue)
    //PROJECT ONE
    if (viewValue >= 205 && viewValue < 360) {
      { // NOTE //text
        // @ts-ignore
        projectOneText.style.top = ((viewValue - 205)) + 'vh'
        //photos
        // @ts-ignore Title //56
        projectOneImgOne.style.top = (((viewValue) * .3) - ((205 * .3) - 25)) + 'vh';
        // @ts-ignore Title //61
        projectOneImgTwo.style.top = (((viewValue) * .25) - ((205 * .25) - 81)) + 'vh'
        // @ts-ignore Title //31
        projectOneImgThree.style.top = (((viewValue) * .4) - ((205 * .4) - 51)) + 'vh'
        // @ts-ignore Title //104
        projectOneImgFour.style.top = (((viewValue) * .45) - ((205 * .45) - 94)) + 'vh'
      }
    }
    //Project Two
    if (viewValue >= 447 && viewValue < 592) {
      console.log("RUNNING PROJECT TWO");
      { // NOTE Text
        // @ts-ignore
        projectTwoText.style.top = ((viewValue - 447)) + 'vh'
        //photoe
        // @ts-ignore Title //56
        projectTwoImgOne.style.top = ((viewValue * .3) - ((447 * .3) - 25)) + 'vh';
        // @ts-ignore Title //61
        projectTwoImgTwo.style.top = ((viewValue * .25) - ((447 * .25) - 81)) + 'vh'
        // @ts-ignore Title //31
        projectTwoImgThree.style.top = ((viewValue * .4) - ((447 * .4) - 51)) + 'vh'
        // @ts-ignore Title //104
        projectTwoImgFour.style.top = ((viewValue * .45) - ((447 * .45) - 94)) + 'vh'
      }
    }
})