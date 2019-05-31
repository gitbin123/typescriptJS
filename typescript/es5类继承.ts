// es5 类

// function person() {
//   this.name = '张三';
//   this.fun=function(){
//     return this.name+"方法"//实例方法 需要new才能使用
//   }
// }
// person.prototype.age=13
// person.prototype.agefun=function (){
//   return this.name +'今年'+this.age
// }
// var p=new person()
// alert(p.agefun())


// // 静态方法
// function person() {
 
// }

// person.agefun=function (){
//   return '我是静态方法'
// }
// alert(person.agefun())



// es5的继承 对象冒充继承
// function webnew(){
//   person.call(this)
// }
// var webnewn=new webnew();
// alert(webnewn.name)
// 对象冒充可以继承构造函数里面的属性和方法，无法继承原型链prototype的属性和方法



// 原型链实现继承
// function web(){}
// web.prototype=new person()
// var webnewwww=new web()
// alert(webnewwww.agefun())
// 既可以继承构造函数里面的属性和方法也可以继承原型链里面的属性跟方法




// 原型链继承还有问题
// function person(name) {
//   this.name = name;
//   this.fun=function(){
//     return this.name+"方法"//实例方法 需要new才能使用
//   }
// }
// person.prototype.age=13
// person.prototype.agefun=function (age){
//   return this.name +'今年'+this.age
// }


// function web(name){
//   person.call(this,name)
// }
// web.prototype=new person()
// var webNew=new web('王五')
// alert(webNew.name)
//实例化子类的时候没有办法给父类传参




// 原型链和对象冒充混合继承
// function person(name,age) {
//   this.name = name;
//   this.age=age
//   this.fun=function(){
//     return this.name+"方法"//实例方法 需要new才能使用
//   }
// }
// person.prototype.age=13
// person.prototype.agefun=function (){
//   return this.name +'今年'+this.age
// }


// function web(name,age){
//   person.call(this,name,age)
// }
// web.prototype=new person()
// var webNew=new web('王五',13)
// alert(webNew.agefun())