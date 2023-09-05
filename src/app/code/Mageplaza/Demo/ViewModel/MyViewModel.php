<?php

namespace Mageplaza\Demo\ViewModel;

class MyViewModel implements \Magento\Framework\View\Element\Block\ArgumentInterface
{
    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return 'Custom block title';
    }
}