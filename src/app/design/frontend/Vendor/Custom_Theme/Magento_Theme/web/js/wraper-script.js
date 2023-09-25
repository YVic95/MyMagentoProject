define([
    'jquery',
    'Magento_Theme/js/custom-widget'
], ($) => {
    return function(config, element) {
        $(element).customWidget();
        $(element).on('click', () => {
            console.log('click on script');

            if( $(element).data('vendorCustomWidget') ) {
                $(element).customWidget('destroy');
            }
            
        }); 
    }
});