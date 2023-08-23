<?php
use \Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(
    ComponentRegistrar::THEME,
    'frontend/Vendor/Custom_Theme',
    __DIR__
);
