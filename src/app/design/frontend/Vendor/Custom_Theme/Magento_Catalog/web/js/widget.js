define([
    'jquery',
    'mage/translate',
    'validation',
    'jquery-ui-modules/widget'
], ($, $t) => {
    $.widget('vendor.countryValidationWidget', {
        _init() {
            //console.log(this.element);
            this.adddEventListeners(); 
        },

        adddEventListeners() {
            this._on(this.element, {
                submit: this.onSubmit.bind(this)
            }); 
        },

        onSubmit(event) {
            event.preventDefault();

            if(!this.element.validation('isValid')) {
                throw new Error($t('Form is not valid'));
            }

            this.sendAjax();
        },

        sendAjax() {
            console.log('Send ajax');
        }
    });

    return $.vendor.countryValidationWidget;
});