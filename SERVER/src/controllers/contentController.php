<?php

namespace Archana\Elearning\Controller;

use Archana\Elearning\Model\Headers;
use Archana\Elearning\Model\Content;

class ContentController{
    private $header;

    public function __construct()
    {
        $this->header = new Headers;
        $this->header->setHeaders();
    }

    public function fetchSub($subject)
    {
        $this->header->setHeaders();
        $data = new Content;
        $fetchedData = $data->fetchData($subject);

    if ($fetchedData !== null) {
        echo json_encode($fetchedData);
    } else {
        echo "Data not found .";
    }
    }
}
?>