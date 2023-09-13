<?php

namespace Mageplaza\Demo\ViewModel;

use Magento\Framework\App\Config\ScopeConfigInterface;

class Locale implements \Magento\Framework\View\Element\Block\ArgumentInterface
{
   protected $scopeConfig;

   public function __construct(
    ScopeConfigInterface $scopeConfig
   )
   {
    $this->scopeConfig = $scopeConfig;
   }
   
   public function getFirstDate()
   {
    return $this->scopeConfig->getValue('general/locale/firstday');
   }
}