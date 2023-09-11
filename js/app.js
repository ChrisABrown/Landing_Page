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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function createTabs(num) {
  for (let i = 1; i <= num; i++) {
    let item = document.createElement('li')
    item.className = 'menu__link'
  }
  let tabs = document.querySelectorAll('.menu__link')
  return tabs
}

function addSection(num) {}

function buildNav() {
  let nav = document.querySelector('#navbar__list')
  let sections = document.querySelectorAll('.landing__container')
  let tabs = createTabs(sections.length)
  tabs.forEach((element) => {
    nav.appendChild(element)
  })
}

function switchClass() {
  let options = document.getElementsByTagName('section').classList
  if (options.include(ACTIVE_CLASS)) {
    isActive = true
  }
  isActive = false
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
document.addEventListener('DOMContentLoaded', createTabs())
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
