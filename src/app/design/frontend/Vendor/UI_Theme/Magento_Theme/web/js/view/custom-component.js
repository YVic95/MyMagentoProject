define(['uiComponent', 'ko'], (uiComponent, ko) => {
    return uiComponent.extend({
        // this.super();
        defaults: {
            text: ko.observable('UI components will appear here!')
        },
        initialize() {
            this._super();

            setTimeout(() => {
                this.text('Updated text');
            }, 2000);
        }
    });
});