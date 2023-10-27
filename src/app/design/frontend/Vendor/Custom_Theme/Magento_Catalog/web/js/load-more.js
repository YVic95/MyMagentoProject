define([
    'jquery',
    'mage/translate',
    'jquery-ui-modules/widget'
], ($, $t) => {
    $.widget('vendor.loadProductsWidget', {
        options: {
            selectors: {
                list: '.products.wrapper .product-items'
            }
        },
        _init() {
            console.log('Success');
            this.appendShowMoreButton();
        },

        appendShowMoreButton() {
            $(this.options.selectors.list).append(
                $('<button/>', {
                    text: $t('Show more'),
                    click: this.getProductsList.bind(this)
                })
            );
        },

        getProductsList() {
            console.log('products from 2 page');
        }
    });

    return $.vendor.loadProductsWidget;
});