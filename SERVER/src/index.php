<?php

namespace Archana\Elearning;

require __DIR__ . '/../vendor/autoload.php';

use Archana\Elearning\Controller\IndexController;
use Archana\Elearning\Controller\UserController;
use Archana\Elearning\Controller\FavouriteController;
use Archana\Elearning\Controller\ContentController;

$urlRoot = '/ebook/SERVER/';
$currentULI = str_replace($urlRoot, "", $_SERVER['REDIRECT_URL']);


switch ($currentULI) {
    case 'user':
        $user = new IndexController();
        $user->fetchUser();
        break;

    case 'user/register':
        $user = new IndexController();
        $user->Insert();
        break;

    case 'user/login':
        $user = new IndexController();
        $user->userCheck();
        break;

    case 'user/list':
        $user = new UserController();
        $user->list();
        break;

    case 'user/data':
        $content = new ContentController();
        $subject = $_GET['subject'];
        $content->fetchSub($subject);
        break;

    case 'fav':
        $fav = new FavouriteController();
        $fav->Favlist();
        break;

    default:
        $index = new IndexController();
        $index->fetchUser();
        break;
}
