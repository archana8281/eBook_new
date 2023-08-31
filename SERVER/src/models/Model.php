<?php
namespace Archana\Elearning\Model;

use Doctrine\DBAL\DriverManager;

class Model {

    public $conn;
    
    public function __construct()
    {
        $connectionParams = [
            'dbname' => 'ebook',
            'user' => 'root',
            'password' => '',
            'host' => 'localhost',
            'driver' => 'pdo_mysql',
        ];

        $this->conn = DriverManager::getConnection($connectionParams);
    }
}