<?php 

/* Uygulayacağım adımlar

1 - İlk olarak kişinin email ve submission id sini tuttuğumuz katılımcının qr kodunu autoresponder'ına göndermeliyiz.

    a) Submission'ı oluşturanlar için auto response özelliğine bu bilgilerin qr ile gönderilmesini talep edebileceği bir tik konabilir.

2 - Auto responder'a katılımcının qr ı iletildikten sonra submission adminin katılımcıların gerçekten o olup olmadığını kontrol edebilmeleri için gerekli olan qr daki bilgiler ile kendi datasında ki bilgilerin eşleşip eşleşmediğini kontrol edebileceğimiz bir sorgu yazmam gerekli.


3- Submission admin qr scan ettikten sonra eğer datası ile uyuşuyor ise olumlu bir cevap aksi taktirde ise olumsuz cevap döneceğimiz bir alan olmalı. 

    Katılımcı qr ı ile etkinlik alanına gelir. Etkinlikteki kişiler katılımcının qr'ını qr scanner eklentisi ile submission id'sini arkada  oluşturacağımız bir sorgu ile var ise yeşil bir buton vasıtası ile "Hoşgeldiniz {isim}, iyi eğlenceler ." gibi bir mesaj submission id yok   ise "İzinsiz giriş. Lütfen etkinlik ekibi ile iletişime geçiniz" gibi bir hata mesajı döndürmeliyiz. 
*/

 // require JotForm Api
 include "jotform-api-php/JotForm.php";

 $jotformAPI = new JotForm("a07d6a84de54aeedf77f0888619f067d");
 $forms = $jotformAPI->getForms();
 $submission = $jotformAPI->getFormSubmissions("82204877337967");

 echo "<pre>";
 print_r($submission);
 echo "</pre><hr><hr>";

 $qrdanGelenDeger = "4099649866219541721 kasim1411@gmail.com Kasim ŞEN";
 $subId = substr($qrdanGelenDeger, 0, 19);


foreach ($submission as $key => $submis):
 if ( in_array($subId,$submis) ){
    $kontrol=true;
 }else{
     $kontrol=false;
 }
endforeach;

//  foreach ($forms as $form) {
//      echo $form['title'];
//      echo $form['id'];
//  }

?>

<!-- <?php if($kontrol=true): ?>
<?php foreach ($submission as $key => $submis) : ?>
      <ul>
         <li><b>Submission İd:</b> <?=$submis['id'];?></li>
         <li><b>Participant's Name :</b> <?=$submis['answers'][2]['answer']['first']?></li>
      </ul>
     <?php endforeach; ?>
<?php else: ?>
<h4>Böyle bir kayıtlı katılımcı bulunmamaktadır.</h4>
<?php endif; ?> -->
