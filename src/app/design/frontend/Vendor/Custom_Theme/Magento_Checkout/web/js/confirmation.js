define([
    'jquery',
    'mage/translate',
    'Magento_Ui/js/modal/confirm',
    "mage/template",
], function ($, $t, confirm, mageTemplate) {
    $('.action-delete').click(function (e) {
        e.stopPropagation();
        confirm({
            title: $t("Remove item cart"),
            content: $t("Do you want remove this item from the cart?"),
            modalClass: "classModal",
            actions: {
                confirm: function () {
                    var params = $(e.currentTarget).data('post');
                    var formTemplate = '<form action="<%- data.action %>" method="post">'
                        + '<% _.each(data.data, function(value, index) { %>'
                        + '<input name="<%- index %>" value="<%- value %>">'
                        + '<% }) %></form>';

                    var formKeyInputSelector = 'input[name="form_key"]';

                    var formKey = $(formKeyInputSelector).val();
                    if (formKey) {
                        params.data.form_key = formKey;
                    }
                    $(mageTemplate(formTemplate, {
                        data: params
                    })).appendTo('body').hide().submit();
                }
            }
        });
    })
});
// define([
//     'jquery',
//     'Magento_Ui/js/modal/confirm',
//     'mage/dataPost'
// ], function($, confirmation, dataPost) {
//     console.log('congrats');
    
//     $(document).on('click', '.action-delete', function () {
//         // if (window.checkoutConfig && window.checkoutConfig.data && window.checkoutConfig.data.confirmation){
//             confirmation({
//                 title: $.mage.__('Confirm your action'),
//                 content: $.mage.__('Do you want to remove this product?'),
//                 actions: {
//                     confirm: function () {
//                         //Perform the removal action here
//                         element.attr('href', element.attr('data-post'));
//                         element[0].click();
//                     },
//                     cancel: function(){
//                         return false;
//                     }
//                 }
//             });
//         // }
        
//     });
    // if (window.checkoutConfig && window.checkoutConfig.data && window.checkoutConfig.data.confirmation) {
    //     console.log(window.checkoutConfig);
    //     console.log(window.checkoutConfig.data);
    //     console.log(window.checkoutConfig.data.confirmation);

    //     confirmation({
    //         title: $.mage.__('Confirm your action'),
    //         content: $.mage.__('Do you want to remove this product?'),
    //         actions: {
    //             confirm: function () {
    //                 //Perform the removal action here
    //                 element.attr('href', element.attr('data-post'));
    //                 element[0].click();
    //             },
    //             cancel: function(){
    //                 return false;
    //             }
    //         }
    //     });
    // }
    
    // console.log('Confirmation works');
    // console.log(element);
    // console.log(config);
    
    // $(document).on('click', '.action-delete', function () {
    //     //var element = $(this);
    //     console.log(element);
    //     console.log(config);
    //     //element.preventDefault();
    //     //const postData = JSON.parse($(this).attr("data-on-confirm-post"));
    //     console.log("post", postData);
    //     confirmation({
    //         title: $.mage.__('Confirm your action'),
    //         content: $.mage.__('Do you want to remove this product?'),
    //         actions: {
    //             confirm: function () {
    //                 //Perform the removal action here
    //                 element.attr('href', element.attr('data-post'));
    //                 element[0].click();
    //             },
    //             cancel: function(){
    //                 return false;
    //             }
    //         }
    //     });
    // });
//});
