<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Homework №5</title>
    <script src="/jquery-3.1.1.min.js"></script>
    <style>
        .class1 {
            width: 100px;
            height: 100px;
                background:green;
                
        }
    </style>
    <script>
        (function ($) {
            $(document).ready(function () { 
              /*1.Разместить на странице 3 ссылки. По клику по ссылке необходимо вывести в консоль путь, на который ссылается ссылка, при этом не должен произойти переход по этой ссылке. Для решения использовать метод .preventDefault().*/
             $('a').click(function (event) {//пример переопределения д-я по умолчанию
                    console.log(event);
                    event.preventDefault();   //отмена поведения по умолчпнию (ссылка,отправка данных)
                     alert($(this).attr('href'));//ссылка на текущий элемент
                 });

             
            });
        })(jQuery);
    </script>
</head>

<body>
    <h2>Hello world</h2>
    <a href="//tut.by" target="_blank">tut.by</a><br>
    <a href="//citydog.by" target="_blank">citydog.by</a><br>
    <a href="//onliner.by" target="_blank">onliner.by</a>
</body>

</html>
