define(['uiComponent', 'ko'], (uiComponent, ko) => {
    return uiComponent.extend({
        
        defaults: {
            template: 'Magento_Theme/observable-test.html',
            header: ko.observable('Lets test observables!'),
            text: ko.observable('Default paragraph'),
            isActive: ko.observable(true),
            items: ko.observableArray(['item', 'item'])
        },
        initialize() {
            this._super();

            setTimeout(() => {
                this.isActive(false);
                this.header('Updated header');
                this.text('Updated text');
                this.items.push('item');
            }, 2000);
        }
    });
});