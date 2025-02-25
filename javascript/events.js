    // swiper 
    new Swiper('.card-wrapper', {
        loop: true,
        spaceBetween: 20,

        // pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },

        // navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {  
                slidesPerView: 1
            },
            480: {
                slidesPerView : 1
            },
            768: {
                slidesPerView : 3
            },
            1024: {
                slidesPerView : 4
            },
        }

    })


