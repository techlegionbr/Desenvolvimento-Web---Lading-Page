const NAV_LIST_ARRAY = Array.from(document.querySelectorAll("#content nav a"))

const updateNav = (e) => {
    NAV_LIST_ARRAY.forEach(element => {
        element.classList.remove("currentSection");
    })
    if (!e.classList.contains("currentSection")) {
        e.classList.add("currentSection");
    }
}

const handleIntersect = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            NAV_LIST_ARRAY.forEach((e)=>{
                if(( "#" + entry.target.id) == e.getAttribute('href')){
                    updateNav(e);
                }
            })
        }
    })
}

const createObserver = () => {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    }

    let observer = new IntersectionObserver(handleIntersect, options);
    boxElement.forEach(e => {
        observer.observe(e);
    })
}

window.addEventListener('load', (event) => {
    boxElement = document.querySelectorAll("section");

    createObserver();

}, false)

