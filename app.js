
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

// Project Text 
let projectOneTitle = document.getElementById('project-one-title')
let projectOneType = document.getElementById('project-one-type')
let projectOneSource = document.getElementById('project-one-source')
let projectOneVisit = document.getElementById('project-one-visit')
let projectOneDescription = document.getElementById('project-one-description')
//Project Photos
let projectOneImgOne = document.getElementById('project-one-img-one')
let projectOneImgTwo = document.getElementById('project-one-img-two')
let projectOneImgThree = document.getElementById('project-one-img-three')
let projectOneImgFour = document.getElementById('project-one-img-four')

// Project Text 
let projectTwoTitle = document.getElementById('project-two-title')
let projectTwoType = document.getElementById('project-two-type')
let projectTwoSource = document.getElementById('project-two-source')
let projectTwoVisit = document.getElementById('project-two-visit')
let projectTwoDescription = document.getElementById('project-two-description')
//Project Photos
let projectTwoImgOne = document.getElementById('project-two-img-two')
let projectTwoImgTwo = document.getElementById('project-two-img-two')
let projectTwoImgThree = document.getElementById('project-two-img-three')
let projectTwoImgFour = document.getElementById('project-two-img-four')

window.addEventListener('scroll', function () {
  let pxValue = window.scrollY; //px

  let viewValue = (100 * (window.scrollY)) / window.innerHeight
  console.log("[viewValue in vh] :", viewValue)
  // ABOUT
  if (viewValue <= 90) {
    // @ts-ignore
    aboutTitle.style.left = ((viewValue * .15)) + 'vw'
    // @ts-ignore
    aboutText.style.right = ((viewValue * .15) - 2.5) + 'vw'
  }
  //PROJECT ONE
  if (viewValue >= 205 && viewValue < 340) {
    { // NOTE Text
      // @ts-ignore Title
      projectOneTitle.style.top = ((viewValue - 205) + 2.3) + 'vh';
      // @ts-ignore Desc
      projectOneDescription.style.top = ((viewValue - 205) + 10) + 'vh';
      // @ts-ignore Type
      projectOneType.style.top = ((viewValue - 205) + 60) + 'vh';
      // @ts-ignore Source
      projectOneSource.style.top = ((viewValue - 205) + 56) + 'vh';
      // @ts-ignore Visit
      projectOneVisit.style.top = ((viewValue - 205) + 52) + 'vh';
    }
    {
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
  if (viewValue >= 427 && viewValue < 562) {
    console.log("RUNNING PROJECT TWO");
    { // NOTE Text
      // @ts-ignore Title
      projectTwoTitle.style.top = ((viewValue - 427) + 5.3) + 'vh';
      // @ts-ignore Desc
      projectTwoDescription.style.top = ((viewValue - 427) + 13) + 'vh';
      // @ts-ignore Type
      projectTwoType.style.top = ((viewValue - 427) + 60) + 'vh';
      // @ts-ignore Source
      projectTwoSource.style.top = ((viewValue - 427) + 56) + 'vh';
      // @ts-ignore Visit
      projectTwoVisit.style.top = ((viewValue - 427) + 52) + 'vh';
    }
    {
      // @ts-ignore Title //56
      projectTwoImgOne.style.top = (((viewValue) * .3) - ((427 * .3) - 25)) + 'vh';
      // @ts-ignore Title //61
      projectTwoImgTwo.style.top = (((viewValue) * .25) - ((427 * .25) - 81)) + 'vh'
      // @ts-ignore Title //31
      projectTwoImgThree.style.top = (((viewValue) * .4) - ((427 * .4) - 51)) + 'vh'
      // @ts-ignore Title //104
      projectTwoImgFour.style.top = (((viewValue) * .45) - ((427 * .45) - 94)) + 'vh'
    }
  }
})