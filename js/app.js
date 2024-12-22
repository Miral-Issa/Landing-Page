/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNavbar = () =>
{
    const navbarList = document.getElementById('navbarList');

    const sections = document.getElementsByTagName('section');
    const docFrag = document.createDocumentFragment();

    for(const section of sections)
    {
        const newListElement = document.createElement('li');
        newListElement.innerHTML = "<a href='#" + section.id + "'>" + section.id + "</a>";
        newListElement.classList.add('minuLink');
        newListElement.id = section.id + "navbar"

        docFrag.appendChild(newListElement);
    }

    navbarList.appendChild(docFrag);
}

// Add class 'active' to section when near top of viewport
const setActiveSection = (event) =>
{
    //disable the previously active section
    const currectActiveSection = document.querySelector('.your-active-class');
    currectActiveSection.classList.remove('your-active-class');

    const navbarActiveli = document.querySelector('#'+currectActiveSection.id + 'navbar');
    navbarActiveli.classList.remove('active-section');

    //set the section choosen as the new active one
    const sectionChoosen = document.querySelector('#' + event.target.textContent);
    sectionChoosen.classList.add('your-active-class');

    const navbarActivatedli = document.querySelector('#'+sectionChoosen.id + 'navbar');
    navbarActivatedli.classList.add('active-section')
}

// Scroll to anchor ID using scrollTO event
const scrollToSection = (event) =>
{
    if(event.target.nodeName == 'A')
    {
        event.preventDefault();
    }

    const sectionChoosen = document.querySelector('#' + event.target.textContent);
    sectionChoosen.scrollIntoView({ behavior: "smooth", block: "end" });
}


//make a section active if the user hand scrolled to it
const makeActive = () => 
{
    const sections = document.getElementsByTagName('section');

    for (const section of sections) {
        const box = section.getBoundingClientRect();
        //Find a value that works best, but 150 seems to be a good start.
        if (box.top <= 300 && box.bottom >= 380) {
        //apply active state on current section and corresponding Nav link
            section.classList.add('your-active-class');
            const navbarActivatedli = document.querySelector('#'+section.id + 'navbar');
            navbarActivatedli.classList.add('active-section')
        } else {
        //Remove active state from other section and corresponding Nav link
            section.classList.remove('your-active-class');
            const navbarActivatedli = document.querySelector('#'+section.id + 'navbar');
            navbarActivatedli.classList.remove('active-section')
        }
     }
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNavbar);

// Scroll to section on link click
const navbarList = document.getElementById('navbarList');
navbarList.addEventListener('click',scrollToSection)

document.addEventListener('scroll',makeActive, 500);


// Set sections as active
const navbarMenu = document.getElementsByClassName('navbarMenu')[0];
navbarMenu.addEventListener('click',setActiveSection)