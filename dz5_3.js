<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Homework №5_3</title>
    <script src="/jquery-3.1.1.min.js"></script>
    <style type="text/css">
    .block{
      height: 1000px;
      width: 700px;
    }
    body{
      margin: 0;
      padding: 0;
    }
    #menu{
      position: fixed;
    }
    </style>
    <script>
    /*3.Разместить на странице 4 ссылки и 4 блока высотой 1000px каждый. По клику на ссылку страница должна проскролиться до соответствующего блока. Для решения использовать метод .scrollTop().*/
    (function ($) {
      $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
          event.preventDefault();//отменяем действие по клику ссылки по дефолту
          var id  = $(this).attr('href'),//забираем идентификатор блока с атрибут href
          top = $(id).offset().top;//узнаем высоту от начала страницы до нужного блока
          $('body,html').animate({scrollTop: top}, 1000); //анимируем переход на расстояние - top за 1500 мс
        });
      });

    })(jQuery);
    </script>
</head>

<body>
<div id="menu">
  <ul>
    <li><a href="#idn1">Link 1</a></li>
    <li><a href="#idn2">Link 2</a></li>
    <li><a href="#idn3">Link 3</a></li>
    <li><a href="#idn4">Link 4</a></li>
  </ul>
</div>
  <div class="block" id="idn1" style="background-color:red"></div>
  <div class="block" id="idn2" style="background-color:green"></div>
  <div class="block" id="idn3" style="background-color:red"></div>
  <div class="block" id="idn4" style="background-color:yellow"></div>  
</body>

</html>
