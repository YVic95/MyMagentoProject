define(['uiElement', 'ko'], (uiComponent, ko) => {

    // Hierarchy: uiClass --> uiElement --> uiCollection/uiComponent 
    // uiCollection=uiComponent --> look requirejs-config.js
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

            //console.log(this.__proto__);
            console.log('COMPONENT NAME: ', this.name);
        } 
    });
})