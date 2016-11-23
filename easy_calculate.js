<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="jquery-3.1.1.min.js"></script>
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
                $('.calc1,.calc2,.calc3').on('click',function (e) {
                    var f1 = +$('.f1').val(),
                   f2 = +$('.f2').val();
                    switch($(this).attr('class')){
                      case 'calc1':
                      $('.result').text(f1+f2); 
                      break;

                      case 'calc2':
                      $('.result').text(f1*f2);
                      break;

                      case 'calc3':
                      if((f1||f2)==0){
                      $('.result').text('Проверьте введенные числа');
                      } else{
                      $('.result').text(f1/f2); 
                      }
                      break;
                    }          
    
                });
            });
        })(jQuery);
    </script>
</head>

<body>

    <input type="text" class="f1">
    <input type="text" class="f2"><br>
    <button class="calc1">Сложить</button>
    <button class="calc2">Умножить</button>
    <button class="calc3">Разделить</button>
    <p class="result"></p>
</body>

</html>
