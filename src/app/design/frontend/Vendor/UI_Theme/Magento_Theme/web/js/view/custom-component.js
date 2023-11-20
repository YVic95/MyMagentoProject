define(['uiComponent', 'ko'], (uiComponent, ko) => {
    return uiComponent.extend({
        // this.super();
        defaults: {
            template: 'Magento_Theme/div-template.html',
            text: ko.observable('UI components will appear here!'),
            isActive: ko.observable(false)
        },
        initialize() {
            this._super();

            // setTimeout(() => {
            //     this.text('Updated text');
            // }, 2000);
        },
        statusChecker() {
            this.isActive(!this.isActive());
        }
    });
});