define([
    'jquery',
    'mage/translate',
    'mage/template',
    'jquery-ui-modules/widget'
], ($, $t, mageTemplate) => {
    $.widget('vendor.templateWidget', {
        _init() {
            const template = mageTemplate('.custom-js-template', {
                title: $t('Products list: '),
                products: [
                    {
                        name: 'Product 1',
                        qty: '100'
                    },
                    {
                        name: 'Product 2',
                        qty: '105'
                    },
                    {
                        name: 'Product 3',
                        qty: '110'
                    },
                ]
            });
            this.element.html(template);
        }
    });

    return $.vendor.templateWidget;
})