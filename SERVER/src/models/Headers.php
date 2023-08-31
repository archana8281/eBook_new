<?php
namespace Archana\Elearning\Model;

class Headers
{
    public  function setHeaders()
    {
        header("Access-Control-Allow-Origin: http://localhost:3000");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
        header("Access-Control-Allow-Headers: Content-Type");
    }
}
?>