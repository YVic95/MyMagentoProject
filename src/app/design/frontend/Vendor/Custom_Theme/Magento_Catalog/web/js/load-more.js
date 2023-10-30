define([
    'jquery',
    'mage/translate',
    'mage/storage',
    'mage/apply/main',
    'catalogAddToCart',
    'jquery-ui-modules/widget'
], ($, $t, storage, main) => {
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
            this.beforeAjax();

            return storage
                .get(`${window.location.pathname}/?p=2`)
                .fail(this.onAjaxError.bind(this))
                .done(this.onAjaxSuccess.bind(this))
                .always(this.afterAjax.bind(this));
        },

        beforeAjax() {
            $('body').trigger('proccessStart');
        },

        afterAjax() {
            $('body').trigger('proccessStop');
        },

        onAjaxError(response) {
            throw new Error($t('Sorry, something went wrong. Error status: %1').replace('%1', response.status));
        },

        onAjaxSuccess(response) {
            const htmlOfNextPage = $(response);
            const dynamicItems = htmlOfNextPage.find(`${this.options.selectors.list} .product-item`);
            const needApplySelector = 'js-need-apply';

            dynamicItems.css('border', '1px solid blue');
            dynamicItems.addClass(needApplySelector);
            $(this.options.selectors.list).append(dynamicItems);
            main.apply();

            $(this.options.selectors.list).find(`${needApplySelector}`).catalogAddToCart().removeClass(needApplySelector);
        }
    });

    return $.vendor.loadProductsWidget;
});