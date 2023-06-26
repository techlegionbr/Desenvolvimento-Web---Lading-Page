// Header style control

const HEADER = document.querySelector("header");

// Event that adds a background to the Header or removes it according to the scroll movement
document.addEventListener('scroll', function () {
    if (window.pageYOffset >= 100) {
        HEADER.classList.add('appearHeader');
    } else {
        HEADER.classList.remove('appearHeader');
    }
})

// Dealing with the side menu

const LATERAL_MENU = document.querySelector(".lateralMenu");
const BUTTON_HAMBURGUER = document.getElementById('button-hamburguer');

// Function that defines if the side menu will appear or disappear
function handleSideMenu() {
    LATERAL_MENU.style.right = LATERAL_MENU.style.right === "0%" ? "-100%" : "0%";
    BUTTON_HAMBURGUER.style.display = LATERAL_MENU.style.right === "0%" ? "none" : "inline-block";
}

// Function that identifies a click outside the lateral menu and hides it
const clickOutsideLateralMenu = (event) => {
    if (!LATERAL_MENU.contains(event.target) && !BUTTON_HAMBURGUER.contains(event.target)) {
        if (LATERAL_MENU.style.right === "0%") {
            handleSideMenu();
        }
    }
}

// Click event outside the Lateral Menu
document.addEventListener('click', clickOutsideLateralMenu);

// dealing with faq accordion animation

const QUESTIONS = document.querySelectorAll(".faq [box-question]");

// event that exposes or hides answers to faq questions
QUESTIONS.forEach(e => {
    e.addEventListener('click', () => {
        if (e.dataset.active == "false") {
            QUESTIONS.forEach(e => {
                e.querySelector('.answer').classList.remove("active");
                e.dataset.active = "false";
                e.querySelector("i").style.transform = "rotate(0deg)";
                e.style.opacity = ".8";
            })
            e.querySelector("i").style.transform = "rotate(180deg)";
            e.querySelector('.answer').classList.add("active");
            e.dataset.active = "true";
            e.style.opacity = "1";
        } else {
            e.querySelector("i").style.transform = "rotate(0deg)";
            e.querySelector('.answer').classList.remove("active");
            e.dataset.active = "false";
            e.style.opacity = ".8";
        }
    })
})