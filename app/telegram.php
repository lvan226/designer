<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$form_place = isset($_POST['form_name']) ? $_POST['form_name'] : '-';
$name   = isset($_POST['username']) ? $_POST['username'] : '-';
$email  = isset($_POST['email']) ? $_POST['email'] : '-';
$phone  = isset($_POST['phone']) ? $_POST['phone'] : '-';
$company   = isset($_POST['company']) ? $_POST['company'] : '-';
$text_message = isset($_POST['mess']) ? $_POST['mess'] : '-';
$token = "1055491562:AAGSDscWppI3LwlWIvSr4xKYFuL4DQlzw70";
$chat_id = "-357922674";
$arr = array(
  'Размещение формы' => $form_place,
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Компания' => $company,
  'Сообщение от клиента' => $text_message,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  // header('Location: thank-you.html');
} else {
  echo "Error";
}
?>