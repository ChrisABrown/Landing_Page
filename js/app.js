/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const ACTIVE_CLASS = 'your-active-class'
let isActive = false
const sectionBuild = `<div class='landing__container'><h2>New Section</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quamnunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duislectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi atincidunt felis. Sed leo nunc, pharetra et elementum non, faucibusvitae elit. Integer nec libero venenatis libero ultricies molestiesemper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinargravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, egetelementum tortor mollis non. </p></div>`

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
//populate the tabs with dataset from the sections then returning an array holding the completed tabs
function createTabs() {
  let sections = document.querySelectorAll('section')
  let tabs = []
  for (let i = 0; i < sections.length; i++) {
    let item = document.createElement('li')
    item.classList.add('menu__link')
    item.textContent = sections[i].dataset.nav
    tabs.push(item)
  }
  return tabs
}

//Not very dynamic for adding a section with different html or anything else but it gets the job done
function addSection(num) {
  let lastChild = document.getElementById('section3')
  for (let i = 0; i < num; i++) {
    let section = document.createElement('section')
    section.innerHTML = sectionBuild
    section.setAttribute('id', 'newSection')
    section.setAttribute('data-nav', 'New Section')
    lastChild.insertAdjacentElement('afterend', section)
  }
}

const scrollToSection = (element) => {
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start',
  })
}

//Uses createTab functions returned array of tabs to then add tabs to the page
function buildNav() {
  let nav = document.querySelector('#navbar__list')
  let sections = document.querySelectorAll('section')
  let tabs = createTabs(sections.length)
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].setAttribute('onclick', scrollToSection(sections[i]))
    nav.appendChild(tabs[i])
  }
  nav.addEventListener('click', () => {
    tabs.forEach((element) => {
      element.setAttribute('onclick', scrollToSection(element))
    })
  })
  nav.appendChild(tabs)
}

function createObserver() {
  let options = {
    rootMargin: '0px',
    threshold: 0.5,
  }
  let target = 'landing__container'
  function switchClass() {
    let sections = document.getElementsByTagName('section')
    for (const section of sections) {
      if (!section.classList.includes(ACTIVE_CLASS)) {
        section.classList.toggle(ACTIVE_CLASS)
      }
    }
  }
  const intersectCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switchClass()
      }
    })
  }
  let observer = new IntersectionObserver(intersectCallback, options)

  document.querySelectorAll(target).forEach((x) => {
    if (x) {
      observer.observe(x)
    }
  })
}

function addScrollTopButton() {
  let footer = document.querySelector('.page__footer')
  const button = document.createElement('button')
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  button.addEventListener('click', () => {
    button.setAttribute('onclick', scrollToTop())
  })
  button.textContent = 'Scroll to Top'
  button.classList.add('btn')
  footer.insertAdjacentElement('beforebegin', button)
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
//Add extra section to bottom of the page
document.addEventListener('DOMContentLoaded', addSection(1))

// build the nav
document.addEventListener('DOMContentLoaded', buildNav())
document.addEventListener('DOMContentLoaded', addScrollTopButton())

// Add class 'active' to section when near top of viewport
// document.addEventListener('onscroll', switchClass())

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
window.addEventListener(
  'load',
  (e) => {
    bodyEL = document.querySelector('#scroll__area')
    createObserver()
  },
  false
)
