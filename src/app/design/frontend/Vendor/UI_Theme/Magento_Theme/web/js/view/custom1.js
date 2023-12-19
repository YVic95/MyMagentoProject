define(['uiElement', 'ko'], (uiComponent, ko) => {

    // Hierarchy: uiClass --> uiElement --> uiCollection/uiComponent 
    // uiCollection=uiComponent --> look requirejs-config.js
    return uiComponent.extend({
        defaults: {
            template: 'Magento_Theme/dataShare',
            text: 'Default text from component #1',
            items: [],
            imports: {
                items: '${$.provider}:items'
            },
            tracks: {
                text: true,
                items: true
            }
        }
    });
})