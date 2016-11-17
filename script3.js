/*6.Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)*/
var obj = {
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
alert(obj.className);
