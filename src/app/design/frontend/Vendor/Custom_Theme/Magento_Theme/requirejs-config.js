var config = {
    map: {
        "*": {
            customScript: "Magento_Theme/js/custom-script",
            custom: "Magento_Theme/js/custom",
            swiperScript: "Magento_Theme/js/swiper-script"
        }
    },
    paths: {
        swiper: "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min"
    },
    shim: {
        "swiper": {
            //deps: ['jquery'], // If Swiper depends on jQuery
            exports: 'Swiper' // Export the Swiper object
        }
    }
};