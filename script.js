// Consts
const HEADER = document.querySelector("header");
const FIRST_SEGMENT = document.querySelector("#first-box-segmento");
const FIRST_DROPDOWN = document.querySelector("#first-dropdown");
const SECOND_SEGMENT = document.querySelector("#second-segment");
const SECOND_DROPDOWN =document.querySelector("#second-dropdown");
const ALL_DROPDOWN = document.querySelectorAll(".form__box--dropdown");
const ALL_SEGMENT = document.querySelectorAll(".form__box--segmento"); 
const ARROW = document.querySelector(".form__box--segmento button i");
const LIST = document.querySelectorAll(".form__box--dropdown ul li");
const FIRST_SUBMIT = document.querySelector("#first-submit");
const SECOND_SUBMIT = document.querySelector("#second-submit");
const FIRSTS_FORM_BOXS = document.querySelectorAll("#first_form .form__box");
const SECOND_FORM_BOXS = document.querySelectorAll("#second_form .form__box");
const FIRST_FORM = document.querySelector("#first_form");
const SECOND_FORM = document.querySelector("#second_form");
const LATERAL_MENU = document.querySelector(".lateralMenu");
const BUTTON_HAMBURGUER = document.getElementById('button-hamburguer');
// Marker for formatting the Whatsapp number
VMasker(document.querySelector('#first_box_whatsapp input')).maskPattern("(99) 9 9999-9999");
VMasker(document.querySelector('#second_box_whatsapp input')).maskPattern("(99) 9 9999-9999");

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
const showDropdown = (DROPDOWN) => {
    if (DROPDOWN.dataset.active === "active") {
        disappearDropdown(DROPDOWN);
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
const disappearDropdown = (DROPDOWN) => {
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
    for(let i = 0; i < ALL_DROPDOWN.length; i++){
        if (!ALL_DROPDOWN[i].contains(event.target) && !ALL_SEGMENT[i].contains(event.target)) {
            disappearDropdown(ALL_DROPDOWN[i]);
        }

    }
}

// Function that selects one of the select options and removes previously selected options
const selected = (event) => {
    let SEGMENT = event.target.parentNode.parentNode.parentNode.querySelector(".form__box--segmento");
    if (!event.target.classList.contains('selected')) {

        LIST.forEach((e) => {
            e.classList.remove('selected')
        })

        event.target.classList.add('selected');
        SEGMENT.firstElementChild.value = event.target.textContent;
        disappearDropdown(event.target.parentNode.parentNode);
    } else {
        event.target.classList.remove('selected');
        SEGMENT.firstElementChild.value = '';
    }
}

// Function that checks if the select value was selected correctly
const checkValue = (form_boxs, form) => {
    const fullBoxes = Array.from(form_boxs);

    const emptyBoxs = fullBoxes.filter(e => e.firstElementChild.value == "");

    if (emptyBoxs.length != 0) {
        emptyBoxs.forEach((e) => {
            e.classList.add("invalid");
            setTimeout(() => {
                e.classList.remove("invalid");
            }, 600);
        })
    } else {
        form.submit();
    }
}



//Events 

// Event that starts the select
FIRST_SEGMENT.addEventListener('click', () => {
    showDropdown(FIRST_DROPDOWN);
});
SECOND_SEGMENT.addEventListener('click', () => {
    showDropdown(SECOND_DROPDOWN);
});


// Click event outside the dropdown
document.addEventListener('click', clickOutsideDropdown);

// Click event outside the Lateral Menu
document.addEventListener('click', clickOutsideLateralMenu);

// Event that removes the form's default submit

FIRST_FORM.addEventListener("submit", function (event) {
    event.preventDefault();
})
SECOND_FORM.addEventListener("submit", function (event) {
    event.preventDefault();
})

// Event that to validate the form values when clicking submit
FIRST_SUBMIT.addEventListener('click', ()=>{
    checkValue(FIRSTS_FORM_BOXS, FIRST_FORM);
});
SECOND_SUBMIT.addEventListener('click', ()=>{
    checkValue(SECOND_FORM_BOXS, SECOND_FORM);
});

// Event that adds a background to the Header or removes it according to the scroll movement
document.addEventListener('scroll', function () {
    if (window.pageYOffset >= 100) {
        HEADER.classList.add('appearHeader');
    } else {
        HEADER.classList.remove('appearHeader');
    }
})


