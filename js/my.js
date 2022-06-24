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

function sectionInViewPort (element) {
    let sectionPosition = element.getBoundingClientRect();
    return (sectionPosition.top >= 0);
}; //(Mike's Coding Tutorials, 2020)

window.addEventListener("scroll", () => {
    let currentView = "";
    var pageYOffset = "";
    //loop through all the sections
    entireSections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionLength = section.clientHeight;
        // i will introduce the pageYOffset.
        //PageYOffset, commonly known as scrollY, is a read-only window property that returns the amount of vertical scrolling
        //(i.e., up or down) that has occurred so far.
        //If the value is set to 0.0, it means that the top edge of the document is presently connected with the upper edge of the browser's subject area.
        if(pageYOffset >= sectionTop - sectionLength/3){
            currentView = entireSections.getAttribute("id");
        };
    });
    navigationItem.forEach(li =>{
        li.classList.remove("your-active-class");
        if(li.classList.contains(currentView)){
            li.classList.add("your-active-class");
            section.style.cssText = "background-color: lemon";
        };
    });

});