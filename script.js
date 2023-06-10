// Consts
const HEADER = document.querySelector("header");
const SEGMENT = document.querySelector(".form__box--segmento");
const DROPDOWN = document.querySelector(".form__box--dropdown");
const ARROW = document.querySelector(".form__box--segmento button i");
const LIST = document.querySelectorAll(".form__box--dropdown ul li");
const FORM_WHATS = document.querySelector(".form__box--whatsapp input");
const SUBMIT = document.querySelector(".form__box--submit");
const FORM_BOXS = document.querySelectorAll(".form__box");
const LATERAL_MENU = document.querySelector(".lateralMenu");
const BUTTON_HAMBURGUER = document.getElementById('button-hamburguer');
// Marker for formatting the Whatsapp number
VMasker(document.querySelector('.form__box--whatsapp input')).maskPattern("(99) 9 9999-9999");

// Functions

const handleSideMenu = () => {
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

// Function that shows or hides the dropdown
const showDropdown = () => {
    if (DROPDOWN.dataset.active === "active") {
        disappearDropdown()
    } else {
        DROPDOWN.style.display = "flex";
        setTimeout(() => {
            DROPDOWN.classList.remove('disappear');
            DROPDOWN.classList.add('appear');
            ARROW.style.transform = "rotate(180deg)";
            DROPDOWN.dataset.active = 'active';
        }, 100);

    }
}

// Function that hides the dropdown
const disappearDropdown = () => {
    setTimeout(() => {
        DROPDOWN.style.display = "none";
    }, 100);

    DROPDOWN.classList.add('disappear');
    DROPDOWN.classList.remove('appear');
    ARROW.style.transform = "rotate(0deg)";
    DROPDOWN.dataset.active = '';
}

// Function that identifies a click outside the dropdown and hides it
const clickOutsideDropdown = (event) => {
    if (!SEGMENT.contains(event.target) && !DROPDOWN.contains(event.target)) {
        disappearDropdown();
    }
}

// Function that selects one of the select options and removes previously selected options
const selected = (event) => {
    if (!event.target.classList.contains('selected')) {

        LIST.forEach((e) => {
            e.classList.remove('selected')
        })

        event.target.classList.add('selected');
        SEGMENT.firstElementChild.value = event.target.textContent;
        disappearDropdown();
    } else {
        event.target.classList.remove('selected');
        SEGMENT.firstElementChild.value = '';
    }
}

// Function that checks if the select value was selected correctly
const checkValue = () => {
    const fullBoxes = Array.from(FORM_BOXS);

    const emptyBoxs = fullBoxes.filter(e => e.firstElementChild.value == "");

    if (emptyBoxs.length != 0) {
        emptyBoxs.forEach((e) => {
            e.classList.add("invalid");
            setTimeout(() => {
                e.classList.remove("invalid");
            }, 600);
        })
    } else {
        document.querySelector('form').submit();
    }
}



//Events 

// Event that starts the select
SEGMENT.addEventListener('click', () => {
    showDropdown();
});

// Click event outside the dropdown
document.addEventListener('click', clickOutsideDropdown);

// Click event outside the Lateral Menu
document.addEventListener('click', clickOutsideLateralMenu);

// Event that removes the form's default submit
document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();

})

// Event that to validate the form values when clicking submit
SUBMIT.addEventListener('click', checkValue);

// Event that adds a background to the Header or removes it according to the scroll movement
document.addEventListener('scroll', function () {
    if (window.pageYOffset >= 100) {
        HEADER.classList.add('appearHeader');
    } else {
        HEADER.classList.remove('appearHeader');
    }
})


