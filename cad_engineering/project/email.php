<?php
$name=$_POST['name'];
$phone=$_POST['tel'];
$text=$_POST['text'];

$address = "kad-in11@yandex.ru";
$sub="Новая заявка от $name ($phone)";
$mes = "$text";
$headers = "Content-type: text/plain; charset=utf-8 \r\n";
$send = mail ($address,$sub,$mes,$headers);

?>