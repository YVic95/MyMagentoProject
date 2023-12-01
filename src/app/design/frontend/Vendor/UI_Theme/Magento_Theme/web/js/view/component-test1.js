define(['uiCollection'], (uiCollection) => {

    return uiCollection.extend({
        defaults: {
            template: "Magento_Theme/custom-template.html"
        },
        initialize() {
            this._super();
            this.customMethod();
        },
        
        customMethod() {
            console.log('Original customMethod');
        }
    });
})