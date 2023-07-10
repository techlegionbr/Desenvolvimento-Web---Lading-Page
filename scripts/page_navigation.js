const NAV_LIST = Array.from(document.querySelectorAll("#content nav a"))
const SIDE_NAV_LIST =  Array.from(document.querySelectorAll(".side_links"))

const updateNav = (e, className) => {
    NAV_LIST.forEach(element => {
        element.classList.remove(className);
    })
    SIDE_NAV_LIST.forEach(element => {
        element.classList.remove(className);
    })
    if (!e.classList.contains(className)) {
        e.classList.add(className);
    }
    
}

const handleIntersect = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            NAV_LIST.forEach((e)=>{
                if(( "#" + entry.target.dataset.rect) == e.getAttribute('href')){
                    updateNav(e, "currentSection");
                }
            })
            SIDE_NAV_LIST.forEach((e)=>{
                if(("#" + entry.target.dataset.rect) == e.getAttribute('href')){
                    updateNav(e, "side_Current_Section");
                }
            })
        }
    })
}

const createObserver = () => {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    }

    let observer = new IntersectionObserver(handleIntersect, options);
    boxElement.forEach(e => {
        observer.observe(e);
    })
}

window.addEventListener('load', () => {
    boxElement = document.querySelectorAll(".rect");

    createObserver();

}, false)
