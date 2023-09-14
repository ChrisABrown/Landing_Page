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

function addSection(num) {
  let lastChild = document.getElementById('section3')
  let sections = document.getElementsByTagName('section')
  for (let i = num; i < num + sections.length; i++) {
    let section = document.createElement('section')
    section.innerHTML = `<div class='landing__container'><h2>Section ${i}</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quamnunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duislectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi atincidunt felis. Sed leo nunc, pharetra et elementum non, faucibusvitae elit. Integer nec libero venenatis libero ultricies molestiesemper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinargravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, egetelementum tortor mollis non. </p></div>`
    lastChild.insertAdjacentElement('afterend', section)
  }
}

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
document.addEventListener('DOMContentLoaded', addSection(2))
document.addEventListener('DOMContentLoaded', createTabs(5))
document.addEventListener('DOMContentLoaded', buildNav())
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
