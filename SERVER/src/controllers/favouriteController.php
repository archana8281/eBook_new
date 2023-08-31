<?php

namespace Archana\Elearning\Controller;

use Archana\Elearning\Model\Favourite;
use Archana\Elearning\Model\Headers;


class FavouriteController {

    private $header;

    public function __construct()
    {
        $this->header = new Headers;
        $this->header->setHeaders();
    }

    public function Favlist()
    {
        $this->header->setHeaders();
        $fav = new Favourite;
        echo json_encode($fav->fetchList());
    }
}
