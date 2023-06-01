// Consts
const SEGMENT = document.querySelector(".form__box--segmento");
const DROPDOWN = document.querySelector(".form__box--dropdown");
const ARROW = document.querySelector(".form__box--segmento button i")
const LIST = document.querySelectorAll(".form__box--dropdown ul li")
const FORM_WHATS = document.querySelector(".form__box--whatsapp input");
const SUBMIT = document.querySelector(".form__box--submit");
const FORM_BOXS = document.querySelectorAll(".form__box");


// Marker for formatting the Whatsapp number
VMasker(document.querySelector('.form__box--whatsapp input')).maskPattern("(99) 9 9999-9999");

// Functions

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
    }else{
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

document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();
  
})

SUBMIT.addEventListener('click', checkValue);


