define(['uiComponent', 'ko'], (uiComponent, ko) => {
    return uiComponent.extend({
        defaults: {
            text: "Default text from component #1",
            template: "Magento_Theme/data-share.html",
            // The exports property is used to copy a local value to some external entity.
            exports: {
                text: "custom2:text"
            },
            tracks: {
                text: true
            }
        },
        initialize() {
            this._super();

            setTimeout(() => {
                this.text ="Updated text from component #1";
            }, 2000);
        } 
    });
})