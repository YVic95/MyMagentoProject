<?php

namespace Mageplaza\Demo\Controller\Adminhtml\Create;

use Magento\Backend\App\Action;
use Magento\Backend\App\Action\Context;
use Magento\Framework\App\Action\HttpGetActionInterface;
use Magento\Framework\View\Result\Page;
use Magento\Framework\View\Result\PageFactory;
use Magento\Framework\Controller\ResultInterface;
use Magento\Framework\Controller\ResultFactory;

/**
 * Index action
 */

class Index extends Action implements HttpGetActionInterface
{
    protected $resultFactory;

    public function __construct(
        PageFactory $resultFactory,
        Context $context
    ) {
        parent::__construct($context);
        $this->resultFactory = $resultFactory;
    }

    public function execute()
    {
        $resultPage = $this->createResultPage();
        return $resultPage;
    }

    private function createResultPage()
    {
        return $this->resultFactory->create();
    }
}







//const ADMIN_RESOURCE = 'Mageplaza_ACLRules::create';
