define(['Magento_Theme/js/view/component-test1'], (componentTest) => {

    return componentTest.extend({
        customMethod() {
            this._super();
            console.log('Extended customMethod');
        }
    });
})