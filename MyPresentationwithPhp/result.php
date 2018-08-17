<?php
 //JotForm API
 include "jotform-api-php/JotForm.php";
 
 //Getting Form
 $jotformAPI = new JotForm("a07d6a84de54aeedf77f0888619f067d");
 $forms = $jotformAPI->getForms();

 //Test amaçlı submission id seçildi, ileride kullanıcı istediği formu seçerek ilgili formlar üzerinde de kontroller gerçekleştirebilir.
 $submission = $jotformAPI->getFormSubmissions("82204877337967");


//  echo "<pre>";
//  print_r($submission);
//  echo "</pre>";

 //Test - Qr code results of the person who will participate in the event
 //Qr dan sonuç geldiğini varsayarak test için bir değer girildi.
 $qrResult = "4101313826212974999 kasim1411@gmail.com Kasim ŞEN";
 $subId = substr($qrResult, 0, 19);
 $qrResultLength = (int)strlen($qrResult);
 $name = substr($qrResult,40,$qrResultLength) ;



 // qr code result and submission id check
 foreach ($submission as $key => $submis):
    if (in_array($subId, $submis)) {
        $kontrol = true;
        break;
    }else{
        $kontrol = false;
    }
 endforeach;

 if( $kontrol ){
    foreach ($submission as $key => $submis) {
        if($submis['id']==$subId){
            $subName = $submis['answers'][2]['prettyFormat']; 
        }
    }
 }
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Partinin tadını çıkarın</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <div class="container">
        <?php if( isset($subName) ) : ?>
        <h1>Konsere Hoşgeldiniz, <?=$subName?></h1>
        <img src="assets/img/confetti.png" alt="Enjoy party with JotForm" width="42" height="42" align="middle">
        <p>Partinin tadını çıkartın. İyi eğlenceler</p>
        <?php else: ?>
        <h1>Konsere Hoşgeldiniz</h1>
        <img src="assets/img/clipboard.png" alt="Enjoy party with JotForm" width="42" height="42" align="middle">
        <p>Giriş geçersiz, etkinliğe ilk olarak kayıt olmalısınız.</p>
        <?php endif; ?>
    </div>
</body>
</html>

