var obj = {
  className: 'open menu'
}
function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];
    	console.log(classes);

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return;
    }
    classes.push(cls);
    obj.className = classes.join(' ');
}

addClass(obj, '');


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
addClass(obj, cls);

