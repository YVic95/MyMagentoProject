define(['uiComponent', 'ko'], (uiComponent, ko) => {
    return uiComponent.extend({
        defaults: {
            template: 'Magento_Theme/observable-test.html',
            header: 'Lets test observables!',
            text: 'Default paragraph',
            isActive: true,
            items: ['item', 'item'],
            tracks: {
                header: true,
                text: true,
                isActive: true,
                items: true
            }
        },

        //entry point of the component
        initialize() {
            this._super();

            setTimeout(() => {
                this.isActive = false;
                this.header = 'Updated header';
                this.text = 'Updated text';
                this.items.push('item');
            }, 2000);
        }
    });
});