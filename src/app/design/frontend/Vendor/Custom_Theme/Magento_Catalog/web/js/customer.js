define([
    'jquery',
    'Magento_Customer/js/customer-data',
    'jquery-ui-modules/widget'
], ($, customerData) => {
    console.log('ok');
    $.widget('vendor.customerInfo', {
        _init() {
            let customerInfo = customerData.get('customer')();
            let cart = customerData.get('cart')();

            // Better to subscribe on event
            this.onCartUpdated(cart);
            customerData.get('cart').subscribe(this.onCartUpdated.bind(this));

            this.onCustomerUpdated(customerInfo);
            customerData.get('customer').subscribe(this.onCustomerUpdated.bind(this));

            // You can update section information using reload() method;
            // but if widget is called multiple times it can impact performance
            
            // cart.subscribe(cart => {
            //     console.log('cart', cart);
            // });
            // customerInfo.subscribe(customer => {
            //     console.log('customer', customer);
            // });
            // customerData.reload(['cart', 'customer'], true);
        },

        onCartUpdated(cart) {
            console.log('cart', cart);
        },

        onCustomerUpdated(customerInfo) {
            console.log('customer', customerInfo);
        }
    });

    return $.vendor.customerInfo;
});