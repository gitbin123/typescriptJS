"use strict";
// 字符串类型
var str = "你好";
console.log(str);
// boolean布尔类型
var issure = false;
console.log(issure);
// number类型
var number = 5;
console.log(number);
// arr 数组类型（两种）
// 1.
var arr1 = [1, 2, 3, 4];
console.log(arr1);
// 2.
var arr2 = [1, 2, 3, 22];
console.log(arr2);
//tuple 元组类型，属于数组的一种
var tuple = [1, "22"];
console.log(tuple);
// enum 枚举类型
var Status;
(function (Status) {
    Status[Status["success"] = 1] = "success";
    Status[Status["error"] = 2] = "error";
})(Status || (Status = {}));
var s = Status.success;
console.log(s);
// 没有赋值是打印下标
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
var c = Color.green;
console.log(c);
// 任意类型 any
var any = 122;
any = [1, '52'];
console.log(any);
var dom = document.getElementsByClassName("box")[0];
dom.style.color = "red";
// null undefined
var unde;
console.log(unde);
var unde1;
unde1 = 1122;
console.log(unde1);
// void 定义方法表示没有返回值
function fun1() {
    console.log('run');
}
fun1();
var fun2 = function () {
    console.log("fun2");
    return 1;
};
fun2();
// never 其他类型 包括null undefined代表从不会出现的值
// var a: never；
// a=3(错误类型)
var a;
a = (function () {
    throw new Error("弄错了");
})();
