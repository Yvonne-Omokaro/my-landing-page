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

/**
 * Define Global Variables
 * 
*/
// to create a navigation having the required section, I will first give it a global variable. I will name it nav

const navLink = document.getElementById("navbar__list");

// find and return a list of all <section> elements within the document

const entireSections = document.querySelectorAll("section");
// The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match thespecified group of selectors
//Note:  NodeList being live means that if the children of the node change, the NodeList object is automatically updated.

// set up the nav
function navSetUp() {
    // loop through the entire sections
    for (let section of entireSections) {
        navName = section.getAttribute("data-nav");
        navDataLink = section.getAttribute("id");

        //create the nav-item for each
        navItem = document.createElement("li");

        //add the text from the HTML
        navItem.innerHTML = `<a class = "menu__link" href="#${navDataLink}">${navName}</a>`;
        
        //add listItem to the menu
        navLink.appendChild(navItem);
    };
    
};

// call the function
navSetUp();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// In this section, I will create a function to observe the section with specificity to the section that is on the viewport and its link
//to carry out the above, I will create a loop using a forEach to lool over the sections

function sectionInViewPort (element) {
    let sectionPosition = element.getBoundingClientRect();
    return (sectionPosition.top <= 0 && sectionPosition.bottom >= 0);
}; //(Mike's Coding Tutorials, 2020)

// I will add active class to the section on the viewport
function toggleActiveClass() {
    for (element of entireSections) {
        //I will add active class to the section's link if the section is in the viewport
        if (sectionInViewPort(element)) {
            //a conditional is added to check if it already contain an active class
            if (!element.classList.contains("page-active-class")) {
                //Add the active class if it doesn't contain it yet
                element.classList.add("page-active-class");
                element.style.cssText = "background-color:red;";
                let getMenu = document.querySelectorAll('a')
                for (const menu of getMenu ) {
                    if(element.getAttribute('data-nav') === menu.innerText){
                        menu.classList.add('menu__inview')
                    } else {
                        menu.classList.remove('menu__inview')
                    }
                };
            };
        } else { // if it's out, the viewport then remove "page-active-class"
            element.classList.remove("page-active-class");
            element.style.cssText = "background-color:linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);;";
            //(Mike's Coding Tutorials, 2020)
        };
    };
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//call the function
document.addEventListener("scroll", toggleActiveClass);
// Add class 'active' to section when near top of viewport
//(Mike's Coding Tutorials, 2020)

/**
 * End Main Functions
 * Begin Events
 * 
*/

//implementing the actual section
const allSectionActivation = () => {
    //loop through all the sections
    entireSections.forEach(element => {
        //create a variable for the offset section
        const myElementOffset = sectionInViewPort(element);
        inviewport = () => myElementOffset < 200 && myElementOffset >= -200;

        toggleActiveClass(element);
        toggleActiveClass(inviewport(), element);
    });
};

window.addEventListener("scroll", allSectionActivation);

// create scroll section

const pageScroll = () => {
     const navLinks = document.querySelectorAll(".navbar__menu a");
     // loop through all the links using forEach loop
     navLinks.forEach(linkUp => {
        linkUp.addEventListener("click", () => {
            //loop through the section and add the Scroll effect
            for(y = 0; y < entireSections; y++){
                entireSections[y].addEventListener("click", scrollToSection(linkUp));
            }

        });
     });


};

pageScroll();
//Source(//https://www.lambdatest.com/blog/browser-compatible-smooth-scrolling-with-css-js-jquery/)

// Scroll to anchor ID using scrollTO event
const scrollingPage = document.querySelectorAll(".navbar__menu a");
  scrollingPage.forEach(data => data.addEventListener("click", smoothscroll));
  function smoothscroll(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
        //Window.scrollTo() scrolls to a particular set of coordinates in the document.
        // Definition of window.scrollTo by MDN web docs)
      top: targetId=== "#" ? 0 : document.querySelector(targetId).offsetTop,
      // top specifies the number of pixels along the Y axis to scroll the window or element.
      //Definition top by MDN web docs)
      behavior: "smooth"
      //scroll behavior specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
      // Definition of scroll behavior by MDN web docs)
    });
  }

  //Source(//https://www.lambdatest.com/blog/browser-compatible-smooth-scrolling-with-css-js-jquery/)


