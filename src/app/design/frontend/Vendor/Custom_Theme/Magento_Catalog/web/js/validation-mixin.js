define(['jquery', 'mage/translate'], function($, $t) {
    'use strict';
  
    return function(targetWidget) {
      $.validator.addMethod(
        'validate-promocode',
        value => /^\w{3}-\w{3}$/.test(value),
        $t('Please enter valid promocode (Ex.: xxx-xxx)')
      )
      return targetWidget;
    }
  });
  