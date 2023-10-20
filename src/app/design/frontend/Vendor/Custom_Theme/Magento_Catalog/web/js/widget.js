define([
    'jquery',
    'mage/translate',
    'mage/url',
    'Magento_Customer/js/customer-data',
    'mage/storage',
    'validation',
    'jquery-ui-modules/widget'
], ($, $t, urlBuilder, customerData, storage) => {
    $.widget('vendor.countryValidationWidget', {
        _init() {
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
            this.beforeAjax();

            // Send ajax using mage/storage
            return storage.get(
                    urlBuilder.build(`rest/all/V1/directory/countries/${this.getCountryId()}`)
                    ).done(this.onAjaxSuccess.bind(this)
                    ).fail(this.onAjaxError.bind(this)
                    ).always(this.afterAjax.bind(this));

            // Or use jQuery $.ajax 
                   
            //return $.ajax({
                //url: urlBuilder.build(`rest/all/V1/directory/countries/${this.getCountryId()}`),
                //contentType: 'application/json',
                //dataType: 'json',
                //beforeSend: this.beforeAjax.bind(this),
                //complete: this.afterAjax.bind(this), 
                //success: this.onAjaxSuccess.bind(this),
                //error: this.onAjaxError.bind(this)
            //});
        },

        getCountryId() {
            return this.element.serializeArray().find(field => field.name === 'country_id').value;
        },

        beforeAjax() {
            $('body').trigger('processStart');
        },

        afterAjax() {
            $('body').trigger('processStop');
        },

        onAjaxSuccess(response) {
            this.showMessage(`You selected this country: ${response.full_name_english}`, type = 'success');
            this.element.find('.country-input').val('');
        },

        onAjaxError(response) {
            this.showMessage(response.responseJSON.message ?? $t('Ooops, something went wrong'));
        },

        showMessage(text = '', type = 'error') {
            if(!text) return this;

            const section = customerData.get('messages')() ?? {};

            // Add the new message
            customerData.set('messages', {
                messages: [  
                    {
                        text,
                        type
                    }
                ]
            });
        },

    });

    return $.vendor.countryValidationWidget;
});