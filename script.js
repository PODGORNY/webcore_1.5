const slider = document.querySelector('.scroll-panel');
const breakSwiper = window.matchMedia('(max-width: 767px)');
let mySwiper;

function mobileSlider() {
    if (breakSwiper.matches) {
        mySwiper = new Swiper(slider, {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 'auto',
        });

        slider.dataset.mobile = 'true';

    } else {
        slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-initialized')) {
            mySwiper.destroy();
        }
    }
}
mobileSlider();
breakSwiper.addEventListener('change', mobileSlider);

//////////////
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

