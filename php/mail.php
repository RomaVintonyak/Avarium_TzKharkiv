<?php 
  $email = trim(strip_tags($_POST['email']));
  $message = '<h3 style="margin: 0; padding: 0; font-size: 18px; font-weight: 700">Message data:</h3>'.'<br/>';
  $message .= '<span style="margin: 0; padding: 0; font-size: 14px; font-weight: 700; color: #896052">Name: </span>'.'<strong>'.trim(strip_tags($_POST['name'])).'</strong>'.'<br/>';
  $message .= '<span style="margin: 0; padding: 0; font-size: 14px; font-weight: 700; color: #896052">Phone: </span>'.'<strong>'.'<a href="tel:'.trim(strip_tags($_POST['phone'])).'">'.trim(strip_tags($_POST['phone'])).'</a>'.'</strong>'.'<br/>';
  $message .= '<span style="margin: 0; padding: 0; font-size: 14px; font-weight: 700; color: #896052">Email: </span>'.'<strong>'.trim(strip_tags($_POST['email'])).'</strong>'.'<br/>';
  
  $subject = "=?utf-8?B?".base64_encode("Message from HTML Web Site.")."?=";
  $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n"."X-Mailer: PHP/".phpversion();
  
  $success = mail("admin@mail.com", $subject, $message, $headers);
  echo "Thanks for your request!";
?>