define([
    'jquery',
    'validation',
    'jquery-ui-modules/widget'
], ($) => {
    $.widget('vendor.checkValidation', {
        _init(element) {
            this._on(this.element, {
                submit: this.onSubmit.bind(this)                    
            })    
        },

        onSubmit(element) {
            element.preventDefault();

            if(!this.element.validation('isValid')) {
                console.log('Form is not valid');

                return this;
            }

            console.log('Form is valid. Send ajax');
        }
    });

    return $.vendor.checkValidation;
});