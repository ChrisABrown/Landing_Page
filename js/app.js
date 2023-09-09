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
const navbar = document.getElementById('navbar__list')

const mainHeader = document.getElementById('main-heading')

const headerRegions = document.getElementsByTagName('header')

const sections = document.getElementsByTagName('section')

const footer = document.getElementsByTagName('footer')

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const addNav = () => {
  const frag = document.createDocumentFragment()
  frag.appendChild(navbar)
  for (header of headerRegions) {
    if (header.className === 'page__header') {
      const nav = header.firstElementChild
      nav.appendChild(frag)
    }
  }
  document.appendChild(frag)
}

const addSections = (num) => {
  for (let i = 1; i <= num; i++) {
    const section = document.createElement('li')
    navbar.appendChild(section)
    section.textContent = `Section ${i}`
    section.style.color = 'blue'
    section.className = 'navbar navbar-items'
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const buildNav = () => {
  addNav()
  addSections(3)
}
buildNav()

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
