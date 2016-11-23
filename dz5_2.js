<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Homework №5</title>
    <script src="/jquery-3.1.1.min.js"></script>
    <script>
    /*2.Разместить на странице абсолютно позиционированный элемент. При движении мыши по экрану устанавливать в качестве "координат" этого элемента "координаты" текущего положения курсора, т.е. элемент должен "прилипнуть" к курсору. Для решения использовать метод .mousemove().*/
        (function ($) {
            $(document).ready(function () { 
             $('html').mousemove(function (event) {//пример переопределения д-я по умолчанию
                   var mouseX= event.originalEvent.pageX;
                   var mouseY= event.originalEvent.pageY;
                   console.log(mouseX,mouseY);
                   $('div').offset({top:mouseY,left:mouseX});
                 });
            });
        })(jQuery);
    </script>
</head>

<body>
    <div style="position: absolute; left:20px; top: 45px; background: #cc0; border-style: double; padding: 5px; width: 200px;height:200px">
    </div>
</body>

</html>
