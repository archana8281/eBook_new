<?php

namespace Archana\Elearning\Controller;

use Archana\Elearning\Model\User;
use Archana\Elearning\Model\Headers;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


class IndexController
{
    private $header;

    public function __construct()
    {
        $this->header = new Headers;
        $this->header->setHeaders();
    }
    public function fetchUser()
    {
        $user = new User();
        $user->findAll();
    }


    public function Insert()
    {
        $getInput = file_get_contents('php://input');
        $input = json_decode($getInput, true);
        $user = new User();
        $email = $input['email'];
        $password = md5($input['password']);
        if ($user->checkOne($email, $password) === true) {
            http_response_code(400);
            echo "Already have an account";
            exit(0);
        } else {
            http_response_code(200);
            $this->header->setHeaders();
            $user->register(
                [
                    'name' => $input['fname'],
                    'subject' => $input['subject'],
                    'email' => $input['email'],
                    'password' => $input['password']
                ]
            );


            //Create an instance; passing `true` enables exceptions
            $mail = new PHPMailer();

            try {
                //Server settings
                // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
                // $mail->isSMTP();
                // $mail->Host       = 'smtp.gmail.com';
                // $mail->SMTPAuth   = true;
                // $mail->Username   = 'eBook@gmail.com';
                // $mail->Password   = 'secret';
                // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
                // $mail->Port       = 465;

                //Recipients
                $mail->setFrom('eBook@gmail.com', 'eBook');
                // $mail->addAddress($input['email'], $input['fname']);
                $mail->addAddress('ashique.cm@acodez.in');


                //Content
                // $mail->isHTML(true);                                  //Set email format to HTML
                $mail->Subject = 'eBook Registration';
                $mail->Body    = 'create an account successfully <b></b>';
                $mail->AltBody = 'Welcome to eBook! 
                      you create an account successfully ';

                $mail->send();
                echo 'mail has been sent';
            } catch (Exception $e) {
                echo "mail could not be sent. Mailer Error: {$mail->ErrorInfo}";
            }
            exit(0);
        }
    }

    public function userCheck()
    {
        $getInput = file_get_contents('php://input');
        $input = json_decode($getInput, true);
        $user = new User();
        $email = $input['email'];
        $password = md5($input['password']);
        $user->check($email, $password);
        $jwtToken = $user->check($email, $password);
        if ($jwtToken === false) {
            http_response_code(400);
            echo "Incorrect email or password";
            exit(0);
        } else {
            http_response_code(200);
            echo json_encode(
                array(
                    "message" => "Successful login.",
                    "jwt" => $jwtToken
                )
            );
            exit(0);
        }
    }
}
