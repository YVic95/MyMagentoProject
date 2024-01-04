<?php 
    namespace Vendor\CustomComponents\Plugin;

    class LayoutProcessor 
    {
        private $streetLinesCounter = 2;
        private $addressPath = ['components', 'checkout', 'children', 'steps', 
                            'children', 'shipping-step', 'children', 'shippingAddress', 
                            'children', 'shipping-address-fieldset', 'children', 
                            'street', 'children'];

        public function afterProcess(\Magento\Checkout\Block\Checkout\LayoutProcessor $subject, $jsLayout) {
            for ($i = 0; $i < $this->streetLinesCounter; $i++) {
                $streetLine = &$jsLayout;
                foreach ($this->addressPath as $pathKey) {
                    $streetLine = &$streetLine[$pathKey];
                }
                
                $streetLine[$i]['placeholder'] = __('Street Line ' . ($i + 1));
            }

            return $jsLayout;

        }
    }