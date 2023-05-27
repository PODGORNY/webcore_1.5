new Swiper(".scroll-panel", {
    /*
    // cтрелки
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    */

    // пагинатор
    pagination: {
        el: ".swiper-pagination",

        // буллет
        type: "bullets",
        clickable: true,
        // динамический буллет
        //dynamicBullets: true,

    /*    // прогрессбар
        type: "progressbar",
        */
    },

/*
    // скролл
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
*/

// управление клавиатурой 
keyboard: {
    enabled: true,
    pageUpDown: true,
},
/*
// управление мышью
mousewheel: {
    sensitivity: 1,
    //eventsTarget: ".scroll__button-container",
},
*/

// количество слайдов для показа
slidesPerView: 'auto',

// отступы между слайдами
//spaceBetween: 0,

// активный слайд по центру
//centeredSlides: true,

// стартовый слайд
//initialSlide: 0;

//скорость
//speed: 500;

// вертикальный слайдер
//direction: "vertical";

// эффект потока при листании
//effect: "coverflow",

/* количество слайдов от ширины экрана
breakpoint: {
    320: {
        slidesPerView: 1;
    },
    480: {
        slidesPerView: 2;
    },
    720: {
        slidesPerView: 3;
    }
},
*/
});

let labels = document.querySelectorAll(".label");
let labelFull = document.querySelectorAll(".labelFull");
let buttonHope = document.querySelector(".footer__buttonOpen");
let openimg = document.querySelector(".buttonOpenImg");
let opentitle = document.getElementById('title');

buttonHope.addEventListener("click", hide);

function hide(event) {
    event.preventDefault();
    if (opentitle.innerHTML === "Показать все") {
        opentitle.innerHTML = "Скрыть";
      } else {
        opentitle.innerHTML = "Показать все";
    }

    openimg.classList.toggle("rotate");

    if (window.matchMedia("(min-width: 1120px)").matches) {

        for (let i = 0; i <= labelFull.length; i++) {
            labelFull[i].classList.toggle("hide");
        }
    }

    for (let i = 0; i <= labels.length; i++) {
        labels[i].classList.toggle("hide");
    }
}

