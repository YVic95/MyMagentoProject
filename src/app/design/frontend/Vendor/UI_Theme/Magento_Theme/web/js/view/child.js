define(['uiElement', 'uiEvents'], (uiElement, uiEvents) => {
    return uiElement.extend({
        initialize() {
            this._super();

            uiEvents.trigger('childRender', this);
        }
    });
})