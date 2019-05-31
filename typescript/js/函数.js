"use strict";
// 定义函数 
// 1.
// function fun0(): number {
//   console.log(1111)
//   return 1
// }
// fun0()
// var fun2 = function (): number {
//   console.log('fn2')
//   return 1
// }
// fun2()
// // 传递参数,可选参数，必须配置最后面
// function fun3(i: number, v?: string): string {
//   console.log(i, v)
//   return 'www' + v
// }
// // alert(fun3(1, '121'))
// var funhs = function (i: string): string {
//   return `${i}`
// }
// // alert(funhs('我是匿名的参数'))
// // 默认参数  
// function fun4(i: number = 6): string {
//   console.log(i)
//   return 'w'
// }
// fun4(9)
// // 剩余参数
// function fun5(a: number, ...result: number[]): number {
//   var i = a;
//   for (var j = 0; j < result.length; j++) {
//     i += result[j]
//   }
//   console.log(i)
//   return i
// }
// fun5(1, 2, 3, 4)
// // 函数重载
// function fun6(i: number): string;
// function fun6(i: string): number;
// function fun6(i: any): any {
//   if (typeof i === 'number') {
//     return i
//   } else {
//     return i
//   }
// }
// fun6('www')
// // 箭头函数
// setTimeout(() => {
//   // console.log(this)
// }, 1000)
