define(['uiComponent', 'ko'], (uiComponent, ko) => {
    return uiComponent.extend({
        defaults: {
            template: "Magento_Theme/data-share.html",
            // The imports property is used for tracking changes of an external entity property. 
            // imports: {
            //     text: "custom1:text"
            // },

            // The links property is used for cross tracking properties changes: 
            // both linked properties are tracked and changing of one results in changing the other.
            // links: {
            //     text: "custom1:text"
            // },

            // The listens property is used to track the changes of a component's property
            // Second parameter is a callback function
            listens: {
                text: "onTextUpdate"
            },
            tracks: {
                text: true
            }
        },
        initialize() {
            this._super();

            setTimeout(() => {
                this.text = "Congrats! It is updated text from component #2";
            }, 4000);

            console.log(this.__proto__);
        },
        onTextUpdate(text) {
            console.log(text);
            // this.text = text
        }
    });
})