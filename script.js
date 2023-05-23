const segment = document.querySelector(".form__box--segmento");
const DROPDOWN = document.querySelector(".form__box--dropdown");
const ARROW = document.querySelector(".form__box--segmento button img")
const LIST = document.querySelectorAll(".form__box--dropdown ul li")
const FORM = document.querySelector(".form");





const showDropdown = ()=>{
    if(DROPDOWN.dataset.active === "active"){
        disappearDropdown()
    }else{
        DROPDOWN.classList.remove('disappear');
        DROPDOWN.classList.add('appear');
        ARROW.style.transform = "rotate(180deg)";
        DROPDOWN.dataset.active = 'active';
    }
}
const disappearDropdown = ()=>{
    DROPDOWN.classList.add('disappear');
    DROPDOWN.classList.remove('appear');
    ARROW.style.transform = "rotate(0deg)";
    DROPDOWN.dataset.active = '';
}

const selectElement = ()=>{
    LIST.forEach((e)=>{
        e.addEventListener('click', ()=>{
            segment.firstElementChild.setAttribute('value', e.textContent);
            LIST.forEach((elem)=>{
                if(elem.textContent === e.textContent){
                    elem.classList.add('selected');
                    disappearDropdown();
                }else{
                    elem.classList.remove('selected');
                }
                
            })
        })
    })
}

segment.addEventListener('click', () => {
    showDropdown();
    selectElement();

    
});

