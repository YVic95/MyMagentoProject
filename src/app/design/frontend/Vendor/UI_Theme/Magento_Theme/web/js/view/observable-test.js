define(['uiComponent', 'ko'], (uiComponent, ko) => {
    return uiComponent.extend({
        // ko observable approach
        // defaults: {
        //     template: 'Magento_Theme/observable-test.html',
        //     header: ko.observable('Lets test observables!'),
        //     text: ko.observable('Default paragraph'),
        //     isActive: ko.observable(true),
        //     items: ko.observableArray(['item', 'item'])
        // },

        //approach with magento tracks
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

        // initObservable() method executes before initialize()
        initObservable() {
            this._super();

            // this.items array has additional methods under hood in comparison with standard js array methods
            console.log([].__proto__); 
            console.log(this.items.__proto__);

            // there are two ways to retrieve the new value of the keys from defaults obj: 
            // using ko observable or using observe method in current component context
            //this.text = ko.observable('text');
            // this.observe(['text']);

            // track() triggers observe() under hood
            // this.track(['text', 'header', 'isActive', 'items'])
            
            // It is important to return context, cause initObservable() method is a part of chain methods:
            // this._super()
            //     .initObservable()
            //     .initModules()
            //     .initStatefull()
            //     .initLinks()
            //     .initUnique();
            return this;
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