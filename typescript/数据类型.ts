
// 字符串类型
var str: string = "你好"
console.log(str)


// boolean布尔类型
var issure: boolean = false
console.log(issure)


// number类型
var number: number = 5
console.log(number)


// arr 数组类型（两种）
// 1.
var arr1: number[] = [1, 2, 3, 4]
console.log(arr1)
// 2.
var arr2: Array<number> = [1, 2, 3, 22]
console.log(arr2)


//tuple 元组类型，属于数组的一种
var tuple: [number, string] = [1, "22"]
console.log(tuple)


// enum 枚举类型
enum Status {
  success = 1, error = 2
}
var s: Status = Status.success
console.log(s)
// 没有赋值是打印下标
enum Color { red, blue, green }
var c: Color = Color.green
console.log(c)


// 任意类型 any
var any: any = 122
any =  [1, '52']
console.log(any)
var dom: any = document.getElementsByClassName("box")[0];
dom.style.color = "red"


// null undefined
var unde: undefined;
console.log(unde)
var unde1: undefined | number;
unde1 = 1122
console.log(unde1)


// void 定义方法表示没有返回值
function fun1(): void {
  console.log('run')
}
fun1()
var fun2 = function (): number {
  console.log("fun2")
  return 1
}
fun2()


// never 其他类型 包括null undefined代表从不会出现的值
// var a: never；
// a=3(错误类型)

var a: never
a = (() => {
  throw new Error("弄错了")
})()