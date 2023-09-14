define(['swiper'], (Swiper) => {
    //console.log(Swiper)
    return function(config, element) {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
        });
    }
});