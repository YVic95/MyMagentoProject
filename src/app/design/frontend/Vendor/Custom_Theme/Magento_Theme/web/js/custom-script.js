define(['jquery', 'mage/calendar'], ($) => {
    return function(config, element) {
        console.log('config', config);
        console.log('element', element);

        $(element).calendar({
            firstDay: config.firstDay
        });
    }
});