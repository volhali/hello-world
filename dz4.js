(function($){ //первая часть
	$(document).ready(function(){
		/*Добавить элементу div класс main - addClass();*/
		$('div').addClass('main');
		/*Поместить внутрь элемента div.main ненумерованный список ul - append();*/
		$('div.main').append('<ul></ul>');
		/*Добавить в элемент ul 10 пунктов li, в каждый из пунктов li добавить текст "Пункт 1" ("Пункт 2" и т.д.) - append();*/
		for(var i=1;i<11;i++){
			$('div.main ul').append('<li>'+'Пункт'+i+'</li>');
		}
		/*Обернуть содержимое пунктов li в тег span - wrapInner();*/
		$('li').wrapInner('<span></span>');
		/*
		Каждому нечетному пункту li добавить класс second, установить в css для этого класса жирное начертание - addClass();*/
		/*$('li:even').addClass('second');*/
		  $('ul li:nth-child(odd)').addClass('second');
		/*
		Каждому пункту li добавить аттрибут order с его порядковым номером - attr();*/
		$('li').attr('order',function(i){
			return i;
		});
		/*
		Удалить последний пункт li - remove();*/
		$('li:last').remove();
		/*Вставить в начале элемента div.main тег h3 текстом "Перечень работ" - prepend().*/
		$('div.main').prepend('<h3>Перечень работ</h3>')

	})

})(jQuery)

/*Задачи на html, text, css

Для решения задач данного блока вам понадобятся следующие методы: html, text, css.

1. Всем <h2> поставьте текст "!".

2. Всем <h3> сделайте красный цвет.

3. Всем <h2> сделайте голубой цвет и font-size: 30px.

Задачи на простые селекторы, +, ~

Получите и покрасьте в красный цвет следующие элементы:

4. Все элементы с классом test.

5. Все <h2> с классом test.

6. Все абзацы, которые следуют сразу за абзацами.

7. Все <li>, которые следуют сразу за <li> с классом www.

8. Все <i> внутри <h2>.

9. Все <i> непосредственно внутри <h2>.

На селекторы jQuery

Для решения задач данного блока вам понадобятся следующие псевдоклассы jQuery: :has, :header, :empty, :contains, :not, :last, :first.

Получите и покрасьте в красный цвет следующие элементы:

10. Все заголовки.

11. Все <h2> НЕ с классом test.

12. Все заголовки НЕ с классом test.

13. Все заголовки, которые следуют сразу за заголовками.

14. Все заголовки с классом test, которые следуют сразу за заголовками с классом test.

15. Все пустые элементы.

16. Первый абзац <p>.

17. Последний абзац <p>.

18. Все <li>, которые содержат текст 'пункт'.

19. Все <h2>, внутри которых есть тег <i>.

20. Все <h2>, которые непосредственно содержат <i>.

Задачи на селекторы jQuery

Получите и покрасьте в красный цвет следующие элементы:

Для решения задач данного блока вам понадобятся следующие псевдоклассы jQuery: :even, :odd, :eq, :lt, :gt, :first-child, :last-child, :nth-child.

21. Третью <li>.

22. Все <li> больше 10-той (отсчет с нуля в jQuery!).

23. Все <li> меньше 10-той.

24. Все <li> больше 10-той и саму 10-ю тоже.

25. Получите первую <li> на странице.

26. Получите последнюю <li> на странице.

27. Получите первую <li> в каждой <ol>.

28. Получите последнюю <li> в каждой <ol>.

29. Получите 10-ю <li> в каждой <ol>.

30. Четные <li>.

31. Нечетные <li>.

32. Четные <li> в каждой <ol>.

33. Нечетные <li> в каждой<ol>.

Задачи на parent()

Для решения задач данного блока вам понадобятся следующие методы: parent.

34. Сделайте родителя <li> с классом www красного цвета.

Задачи на each

Для решения задач данного блока вам понадобятся следующие методы: each.

35. Выведите алертом содержимое всех абзацев <p> (по очереди).

36. Выведите алертом содержимое всех заголовков (по очереди).

37. Поменяйте содержимое всех <li> на их порядковый номер.

38. Добавьте всем <li> в конец их порядковый номер.
*/
/*(function($){

	$(document).ready(function(){
		/*$('h2').text('!!!!!!'); //1
		$('h3').css('color','red');//2
		$('h2').css({'color':'blue','font-size':'30px'}); //3*/
		/*$('.test').css('color','red');//4*/ 
		/*$('h2.test').css('color','red');//5*/
		/*$('p~p').css('color','red');//6*/
		/*$('li~li.www').css('color','red');//7*/
		/*$('h2 i').css('color','red');//8*/
		/*$('h2>i').css('color','red');//9*/
		/*$(':header').css('color','red');//10*/
		/*$('h2:not(.test)').css('color','red');//11*/
		/*$(':header:not(.test)').css('color','red');//12*/
		/*$(':header+:header').css('color','red');//13*/
		/*$(':header.test+:header.test').css('color','red');//14*/
		/*$(':empty').css('color','red');//15*/
		/*$('p:eq(0)').css('color','red');//16*/
		/*$('p:last').css('color','red');//17*/
		/*$('li:contains("пункт")').css('color','red');//18*/
		/*$('h2:has(i)').css('color','red');//19*/ 

			/*$('li:eq(2)').css('color','red');//21*/
			/*$('li:gt(9)').css('color','red');//22*/
			/*$('li:lt(9)').css('color','red');//23*/
			/*$('li:gt(9)').css('color','red'); $('li:eq(9)').css('color','red'); //24*/
			/*$('li:first').css('color','red'); //25*/
			/*$('li:last').css('color','red');//26 */
			/*$('ul li:first').css('color','red');//27*/
			/*$('ul li:last').css('color','red');//28*/
			/*$('ul li:eq(9)').css('color','red');//29*/
			/*$('li:even').css('color','red');//30*/
			/*$('li:odd').css('color','red');//31*/
			/*$('ul li:even').css('color','red');//32*/
			/*$('ul li:odd').css('color','red');//33*/

			/*$('li:parent.www').css('color','red');//34*/
			/*$('p').each(
				function (index, elem){//35
				alert($(elem).text());
				}
			);*/

			/*$(':header').each(
				function (index, elem){//36
				alert($(elem).text());
				}
			);*/
			/*$('li').each(
				function (index, elem){//37
				$(elem).text(index);
				}
			);*/
			/*$('li').each(
				function (index, elem){//38
				$(elem).append(index);
				}
			);
		})

})(jQuery)
