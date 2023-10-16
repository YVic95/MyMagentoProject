define([
    'jquery',
    'Magento_Customer/js/customer-data',
    'mage/translate',
    'jquery-ui-modules/widget'
], ($, customerData, $t) => {
    //console.log('OK');

    $.widget('vendor.systemMessages', {
        _init() {
            this._on(this.element, {
                click: this.showMessages.bind(this)                    
            }); 
        },
        showMessages() {
            // Gets messages section
            const section = customerData.get('messages')();

            // Checks if messages exist inside this section
            const messages = section.messages ?? [];
            const newMessages = [
                {
                    type: 'success',
                    text: $t('Custom success message')
                },
                {
                    type: 'error',
                    text: $t('Custom error message')
                },
                {
                    type: 'warning',
                    text: $t('Custom warning message')
                }
            ]
            if (!this.isMessageAlreadyExistsInArray(messages, newMessages)) {
                customerData.set('messages', {
                    messages: [
                        ...messages,
                        ...newMessages
                    ]
                });
            }
            
        },
        isMessageAlreadyExistsInArray(existingMsgs, newMsgs) {
            return newMsgs.every(msg => existingMsgs.find(exMsg => exMsg.type === msg.type && exMsg.text === msg.text));
        }
    });

    return $.vendor.systemMessages;
});