define(['uiCollection', 'uiLayout'], (uiCollection, uiLayout) => {

    return uiCollection.extend({
        defaults: {
            template: "Magento_Theme/parent.html"
        },

        addChild() {
            uiLayout([{
                parent: this.name,
                name: `child-${ new Date().getTime()}`,
                component: 'uiElement',
                template: 'Magento_Theme/child',
            }])
        }
    });
})