define(['uiElement', 'Magento_Theme/js/action/action', 'Magento_Theme/js/model/model'], 
        (uiElement, action, model) => {
    return uiElement.extend({
        defaults: {
            template: 'Magento_Theme/form.html',
            promocode: '',
            items: [],
            tracks: {
                promocode: true,
                items: true
            },
            statefull: {
                promocode: true
            }
        },

        initialize() {
            this._super();

            this.getData();

            return this;
        },

        getData() {
            this.items = model.get();
        },

        pushData() {
            action(this.promocode);
        }
    });
})