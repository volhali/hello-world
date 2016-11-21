<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="/js/jquery-3.1.1.min.js"></script>
     <script src="/js/jquery.easing.1.3.js"></script>
    <style>
        .class1 {
            width: 100px;
            height: 100px;
                background:green;
                
        }
    </style>
    <script>
        (function ($) {
            $(document).ready(function () { //on = method/click=event
                /*$('h2').on('click',function(){
                 $('p').addClass('class1');
                })*/
                /*$('.btn').click(function () {
                    alert(1111);
                });*/
                /*$('body').on('mousemove',function (event) {
                   console.log(event.originalEvent.pageX+' '+event.originalEvent.pageY);
                });*/
                /* $('a').on('click',function (event) {//пример переопределения д-я по умолчанию
                    event.preventDefault();   //отмена поведения по умолчпнию (ссылка,отправка данных)
                     alert($(this).attr('href'));//ссылка на текущий элемент
                 });*/
                /*$('.calc,.calc2,.calc3').on('click',function (e) {
                    var f1 = +$('.f1').val(),
                   f2 = +$('.f2').val();
                    if($(this).hasClass('calc')){
                       $('.result').text(f1+f2); 
                    };
                    
                     
                     $('.result2').text(f1*f2);
                     $('.result3').text(f1/f2);

                });*/
                /*$('.calc').on('click', function (e) {
                    $('.result').trigger('getResult'); //
                    $('.result').on('getResult', function () {
                        $('.result').text('100');
                    })
                });*/
                
               /* $('.btn1').on('click',function(){ //структурированный вывод
                   $.ajax({//принимает объект в {}
                       url:'2.html',
                       method:'GET'
                   }).done(function(data){
                       alert('Запрос выполнен');
                       $('.info1').html(data);
                   }).fail(function(data){
                       alert('Запрос не выполнен');
                   }).always(function(){
                       console.log('Запрос отправлен');
                   });
                    
                })
                
                
                $('.btn2').on('click',function(){
                   $.ajax({//принимает в качестве аргумета объект в {}
                       url:'1.json',
                       method:'GET'
                   }).done(function(data){
                       $('.info2').text(data.top);
                   });
                    
                })
                
                
                $('.btn3').on('click',function(){//с отправкой данных
                    $.ajax({
                        url:'1.php',
                        method:'POST',
                        data:{
                            param1:'Значение 1',
                            param2:'Значение 2'
                        }
                    }).done(function(data){
                        $('.info3').text(data);
                    });
                })*/
                
                var block = $('.class1');
                block.on('click',function(){
                    block.animate({
                        width:'200px',
                        height:'200px'
                    }),3000,'easeInOutBounce',//easings.net - плавности
                        alert('Анимация завершена');
                })
                
                
                
                
                
                
                
                
                
            });
        })(jQuery);
    </script>
</head>

<body>
    <h2>Hello world</h2>
    <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sunt commodi quaerat aliquid eius placeat, recusandae sapiente, dignissimos sint voluptatem architecto! Fuga nisi officiis inventore soluta? Natus, incidunt, ab! Nobis.</p>
    <button class="btn">Кнопка</button>
    <a href="http://tut.by" target="_blank">Ссылка</a>-->
    <!--<input type="text" class="f1">
    <input type="text" class="f2">
    <button class="calc">Сложить</button>
    <button class="calc2">Умножить</button>
    <button class="calc3">Разделить</button>
    <p class="result"></p>
    <p class="result2"></p>
    <p class="result3"></p>-->
    <!--<button class="btn1">Загрузить 1</button>
    <button class="btn2">Загрузить 2</button>
    <button class="btn3">Отправить</button>
    <div class="info1">Результат 1</div>
    <div class="info2"></div>
    <div class="info3"></div>-->
    <div class="class1"></div>
</body>

</html>
