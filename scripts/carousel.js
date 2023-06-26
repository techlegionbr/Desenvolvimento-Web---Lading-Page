// Events for carousel

// Event to spin the carousel
const ARROWS = document.querySelectorAll(".steps__content--carousel i");
const STEPS_CARDS = document.querySelectorAll(".carousel__gallery [card-carrossel]");
const MAX_INDEX = STEPS_CARDS.length;
let currentItem = 0;

ARROWS.forEach((e) => {
    e.addEventListener('click', function () {
        if (e.classList.contains("arrow-left")) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }
        if (currentItem >= MAX_INDEX) {
            currentItem = 0;
        }
        if (currentItem < 0) {
            currentItem = MAX_INDEX - 1;
        }
        STEPS_CARDS.forEach(e => {
            e.classList.remove("current_item");
        })
        STEPS_CARDS[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
        STEPS_CARDS[currentItem].classList.add("current_item");
    })
})

const centerCard = () => {
    STEPS_CARDS[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest"
    })
}

const checkCurrendWidth = () => {
    centerCard();
}

window.addEventListener('resize', checkCurrendWidth);