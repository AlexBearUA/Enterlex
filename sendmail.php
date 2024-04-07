<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('enterlexmail@enterlex-biuro.pl', 'Enterlex бюро');
	//Кому отправить
	$mail->addAddress('stbearua@gmail.com');
	//Тема письма
	$mail->Subject = 'Вам пришла новая заявка';



	//Тело письма
	$body = '<h2>Новая заявка</h2>';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}

	if(trim(!empty($_POST['tel']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
	}

	if(trim(!empty($_POST['service']))){
		$body.='<p><strong>Услуга:</strong> '.$_POST['service'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Заявка успешно отправлена';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>