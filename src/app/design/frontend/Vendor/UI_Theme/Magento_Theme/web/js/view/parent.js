define(['uiCollection', 'uiLayout', 'uiEvents'], (uiCollection, uiLayout, uiEvents) => {

    return uiCollection.extend({
        defaults: {
            template: "Magento_Theme/parent.html"
        },

        initialize() {
            this._super();
            uiEvents.on('childRender', this.onChildRender.bind(this));
        },

        addChild() {
            uiLayout([{
                parent: this.name,
                name: `child-${ new Date().getTime()}`,
                component: 'Magento_Theme/js/view/child',
                template: 'Magento_Theme/child',
            }]);
        },

        onChildRender(child) {
            console.log(child);
        }
    });
})