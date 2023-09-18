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
    item.id = sections[i].dataset.nav
    tabs.push(item)
  }
  return tabs
}

//adds section based off num parameter, sets attributes for section and fills it with dummy text
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

//Uses createTabs functions' returned array of tabs to then add tabs to the page dependent on the number of sections on the page
function buildNav() {
  let nav = document.querySelector('#navbar__list')
  let sections = document.querySelectorAll('section')
  let tabs = createTabs(sections.length)
  tabs.forEach((element) => nav.appendChild(element))
}

//Adds event listener to navbar that listens for a click, then scrolls to the section based of the sections' data-nav matching the text content of the tab
function sectionScroll() {
  let nav = document.querySelector('#navbar__list')
  let sections = document.getElementsByTagName('section')

  nav.addEventListener('click', (e) => {
    for (let i = 0; i < nav.children.length; i++) {
      let choice = e.target.textContent
      let id = sections[i].getAttribute('id')
      if (choice === sections[i].dataset.nav) {
        let section = document.getElementById(id)
        section.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          inline: 'start',
        })
      }
    }
  })
}

//Adds and removes the ACTIVE_CLASS variable and styling variables from a section dependent on whether sections is intersecting with viewport or not, sections are hidden by default and scrolling down reveals sections
function sectionClassChange() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      let intersecting = entry.isIntersecting
      let target = entry.target
      if (!intersecting) return
      target.classList.toggle(ACTIVE_CLASS)
      target.firstElementChild.classList.replace('hide-left', 'from-left')
      target.firstElementChild.classList.replace('hide-right', 'from-right')
      observer.unobserve(target)
    })
  })
  document.querySelectorAll('.landing__container').forEach((el, index) => {
    let classlist = el.classList
    switch (index) {
      case 0:
      case 2:
        classlist.add('hide-left')
        break
      case 1:
      case 3:
        classlist.add('hide-right')
        break
      default:
        classlist.add('hide-right')
    }
  })
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section)
  })
}

//Adds the ACTIVE_CLASS variable to the tab based on matching the tab id with the dataset of the section currently in view
function tabClassChange() {
  let options = {
    root: null,
    threshold: 0.9,
  }
  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries
    let nav =
      entry.target.parentElement.parentElement.firstElementChild
        .firstElementChild.firstElementChild.children
    let dataAnchor = entry.target.dataset.nav
    for (let i = 0; i < nav.length; i++) {
      if (nav[i].id === dataAnchor && entry.isIntersecting) {
        nav[i].classList.toggle(ACTIVE_CLASS)
      } else {
        nav[i].classList.toggle(ACTIVE_CLASS, false)
      }
    }
  }, options)

  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section)
  })
}

//Hides the scroll to top button until a threshold is reached on the footer in relation to the viewport
function handleScroll() {
  let footer = document.querySelector('footer')
  let btn = document.querySelector('.btn')
  let options = {
    threshold: 0.9,
  }

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      let intersecting = entry.isIntersecting
      if (intersecting) {
        btn.classList.add('showBtn')
      } else {
        btn.classList.remove('showBtn')
      }
    })
  }

  let observer = new IntersectionObserver(callback, options)
  observer.observe(footer)
}

function hideNavBar() {
  let scrollTimer = -1
  let nav = document.querySelector('.page__header')

  window.onscroll = () => {
    nav.setAttribute('class', 'page__header reappear')

    if (scrollTimer !== -1) clearTimeout(scrollTimer)
    scrollTimer = window.setTimeout(() => {
      disappear()
    }, 5000)
  }

  const disappear = () => {
    nav.setAttribute('class', 'page__header disappear')
  }
}

//builds button for scrolling to the top of the screen and adds it to the footer
function addScrollTopButton() {
  let footer = document.querySelector('.page__footer')
  let list = ['btn', 'showBtn']
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
  button.classList.add(...list)
  footer.insertAdjacentElement('beforeend', button)
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
document.addEventListener('scroll', handleScroll())

document.body.addEventListener('scrollend', hideNavBar())

// Scroll to anchor ID using scrollIntoView
document.addEventListener('click', sectionScroll())

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', sectionClassChange())
document.addEventListener('scroll', tabClassChange())

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
