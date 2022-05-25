
// MENU

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

function hrefOnClick() {
    document.getElementById("menu-bar").classList.remove("change");
    document.getElementById("nav").classList.remove("change");
    document.getElementById("menu-bg").classList.remove("change-bg");
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("../data/testimonials.json")
        .then((response) => response.json())
        .then((data) => {
            let slides = '';

            for (let testimonial of data) {
                slides += `
                        <div class="swiper-slide">
                            <div class="swiper-info">
                                <img class="swiper-photo" src="${testimonial.image}" alt="Testimonials photo">
                                <div class="swiper-person">
                                    <div class="swiper-name">
                                        ${testimonial.name}
                                    </div>
                                    <div class="swiper-position">
                                        ${testimonial.position}
                                    </div>
                                </div>
                            </div>
                            <p class="swiper-testimonials">
                                ${testimonial.testimonial}
                            </p>
                        </div>
                    `;
            }
            document.querySelector('.swiper').innerHTML = `
                    <div class="swiper-wrapper">
                        ${slides}
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                `;
            // SWIPER
            const swiper = new Swiper('.swiper', {
                // Optional parameters
                //direction: 'vertical',
                loop: true,
                slidesPerView: 1,
                spaceBetween: 30,
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        })
        .catch((err) => {
            document.querySelector('.swiper').innerHTML = '<p>Sorry, oops!</p>';
        });
})
//Scroll var1
// let cords = ['scrollX', 'scrollY'];
// // Перед закрытием записываем в локалсторадж window.scrollX и window.scrollY как scrollX и scrollY
// window.addEventListener('unload', e => cords.forEach(cord => localStorage[cord] = window[cord]));
// // Прокручиваем страницу к scrollX и scrollY из localStorage (либо 0,0 если там еще ничего нет)
// window.scroll(...cords.map(cord => localStorage[cord]));


//Scroll var2
// document.addEventListener("DOMContentLoaded", function (event) {
//     var scrollpos = localStorage.getItem('scrollpos');
//     if (scrollpos) window.scrollTo(0, scrollpos);
// });

// window.onbeforeunload = function (e) {
//     localStorage.setItem('scrollpos', window.scrollY);
// };


//Scroll var3
// //code to refresh the page
// var page_y = $(document).scrollTop();
// window.location.href = window.location.href + '?page_y=' + page_y;

// //code to handle setting page offset on load
// $(function () {
//     if (window.location.href.indexOf('page_y') != -1) {
//         //gets the number from end of url
//         var match = window.location.href.split('?')[1].match(/\d+$/);
//         var page_y = match[0];

//         //sets the page offset
//         $('html, body').scrollTop(page_y);
//     }
// });


//Scroll var4
document.addEventListener("DOMContentLoaded", function (event) {
    var scrollpos = sessionStorage.getItem('scrollpos');
    if (scrollpos) {
        window.scrollTo(0, scrollpos);
        sessionStorage.removeItem('scrollpos');
    }
});

window.addEventListener("beforeunload", function (e) {
    sessionStorage.setItem('scrollpos', window.scrollY);
});



