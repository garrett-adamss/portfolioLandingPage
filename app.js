// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
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

// ——————————————————————————————————————————————————
// TEXT
// ——————————————————————————————————————————————————

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


// ——————————————————————————————————————————————————
// Background Color Scroll
// ——————————————————————————————————————————————————

// window.addEventListener(
//   "scroll",
//   () => {
//     document.body.style.setProperty(
//       "--scroll",
//       // @ts-ignore
//       window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
//     );
//   },
//   false
// )

let aboutTitle = document.getElementById('about-title')
let aboutText = document.getElementById('about-text')

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  console.log("[value] :", value)
  if (value <= 750) {
    // @ts-ignore
    aboutTitle.style.left = (value - 650) + 'px'
    // @ts-ignore
    aboutText.style.right = (value - 1300) + 'px'
  }

})