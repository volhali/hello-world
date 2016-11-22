/*1. Написать функцию, которая возвращает последний элемент массива.*/
function last_elem_arr(){
	var arr = [1,2,3,4,5,67,12];
	var length = arr.length;
	console.log(length);
	console.log(arr[length-1]);
	return arr[length-1]; 
}

alert(last_elem_arr());

/*-------------------------------------------------------------------------------------*/

/*2. Задача из 5 шагов-строк:

Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги».*/
/*
var styles = new Array('«Джаз»','Блюз');
console.log(styles);
styles.push('Рок-н-Ролл');//Добавление в конец массива
console.log(styles);
var length = styles.length;
styles[length-2]='«Классика»'; 
console.log(styles);
alert(styles.shift());//Удалить первый элемент массива и вывести его
console.log(styles);
styles.unshift('Рэп','Регги');//Добавоение в начало массива
console.log(styles);*/

/*-------------------------------------------------------------------------------------*/

/*3. Напишите код, который:

Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива.*/


/*var arr = [];
var sum = 0;
do{
	var a =prompt('Введите значения');
	arr.push(a);
}while(a!=null && !isNaN(a) && a!='')
arr.pop();
console.log(arr);
for (var i = 0; i < arr.length; i++) {
	sum += +arr[i];
}
console.log(sum);*/

/*-------------------------------------------------------------------------------------*/
/*4. Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.*/

/*var arr = ["Яблоко", "Апельсин", "Груша"];
var value = "Груша";
function find(arr, value) {

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == value) return i;
  }

  return -1;
}
var result = find(arr,value);
alert(result);*/

/*-------------------------------------------------------------------------------------*/

/*5. В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
*/

/*var obj = {
  className: 'open menu'
}
var cls ="break";
function addClass(obj, cls){
    var arr = obj.className;
    var exp = arr.split(' ');
    console.log(exp);
    var add = 0;
    for (var i = 0; i < exp.length; i++) {
        if(exp[i]==cls) add=1;
    }
    if(add==0){
        obj.className = obj.className +' '+cls;
    }
    console.log(obj.className);
}
addClass(obj, cls);*/
/*-------------------------------------------------------------------------------------*/

/*6.Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:*/

/*var obj = {
    className: 'open menu close'
};
var cls ="menu";

function removeClass(obj, cls) {
    var arr = obj.className;
    var exp = arr.split(' ');
    console.log(exp);
    exp.forEach(function (a, b, c) {
        if (c[b] == cls) {
            exp.splice(b, 1);
        }
    })
    console.log(exp);
    var upd = exp.join(' ');
    obj.className = upd;
    console.log(obj);
}
removeClass(obj, cls);
alert(obj.className);*/


