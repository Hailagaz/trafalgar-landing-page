
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