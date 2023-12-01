define([], () => {

    return componentTest2 => {
        return componentTest2.extend({
            customMethod() {
                this._super();
                console.log('customMethod from mixin');
            }
        })
    }
})