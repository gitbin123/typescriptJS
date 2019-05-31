"use strict";
// 定义函数 
// 1.
function fun0() {
    console.log(1111);
    return 1;
}
fun0();
var fun2 = function () {
    console.log('fn2');
    return 1;
};
fun2();
// 传递参数,可选参数，必须配置最后面
function fun3(i, v) {
    console.log(i, v);
    return 'www' + v;
}
// alert(fun3(1, '121'))
var funhs = function (i) {
    return "" + i;
};
// alert(funhs('我是匿名的参数'))
// 默认参数  
function fun4(i) {
    if (i === void 0) { i = 6; }
    console.log(i);
    return 'w';
}
fun4(9);
// 剩余参数
function fun5(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var i = a;
    for (var j = 0; j < result.length; j++) {
        i += result[j];
    }
    console.log(i);
    return i;
}
fun5(1, 2, 3, 4);
function fun6(i) {
    if (typeof i === 'number') {
        return i;
    }
    else {
        return i;
    }
}
fun6('www');
// 箭头函数
setTimeout(function () {
    // console.log(this)
}, 1000);
