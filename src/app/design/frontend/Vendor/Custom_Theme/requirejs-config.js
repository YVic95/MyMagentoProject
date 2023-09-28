var config = {
    map: {
        "*": {
            customScript: "Magento_Theme/js/custom-script",
            custom: "Magento_Theme/js/custom",
            swiperScript: "Magento_Theme/js/swiper-script",
            confirmationAlert: "Magento_Checkout/js/confirmation"
        }
    },
    paths: {
        swiper: "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min"
    },
    shim: {
        "swiper": {
            exports: 'Swiper' // Export the Swiper object
        },
        "confirmationAlert": {
            deps: ['jquery']
        }
    },
    config: {
        'Magento_Theme/js/custom': {
            valueFromRequireJs: false,
            anotherValue: true
        },
        mixins: {
            'mage/validation': {
                'Magento_Catalog/js/validation-mixin': true
            }
        }
    }
};