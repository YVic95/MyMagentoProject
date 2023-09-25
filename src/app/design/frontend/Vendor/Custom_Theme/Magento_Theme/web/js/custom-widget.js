define([
    'jquery',
    'jquery-ui-modules/widget'
], ($) => {
    $.widget('vendor.customWidget', {
        _init() {
            // use this.element to fetch the element instead of $(element)
            // if you need to fetch config use this.options 
            // this.element.on('click.customWidget', () => {
            //     console.log('click on widget');
            // });  
            this._on(this.element, {
                click: () => {
                    console.log('click on widget');
                }
            })   
        },
        // _destroy() {
        //     this.element.off('click.customWidget');
        // }
    });
    
    return $.vendor.customWidget;
});