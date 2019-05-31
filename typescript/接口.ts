// 定义传入的参数 
// function person(name:string):void{

// }
// person('www')

// function person1(label:{name:string}):void{

// }
// person1({name:'账单'})


// 对象的约束 
// interface each{
//   name:string;
//   age:number
// }
// function person(restrict:each){
//   alert(restrict.name+'--'+restrict.age)
// }
// person({name:'sss',age:5})


//可选属性
// interface each{
//     name?:string;
//     age:number
//   }
//   function person(restrict:each){
//     alert(restrict.name+'--'+restrict.age)
//   }
//   person({age:5})


// 原生请求封装

// interface config{
//   type:string;
//   url: string;
//   data?:string;
//   dataType:string
// }
// function ajax(config:config){
//   var xhr=new XMLHttpRequest();
//   xhr.open(config.type,config.url,true);
//   xhr.send(config.data)
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState==4&&xhr.status==200){
     
//     }
//   }
// }
// ajax({
//   type:'get',
//   url: 'http://a.itying.com/api/productlist',
//   data:'name=zhagnsan',
//   dataType:'json'
// })




//函数类型接口   对方法传入的参数以及返回的参数进行约束
// interface person{
//   (name:string,age:number):string
// }
// var new1:person=function(name:string,age:number):string{
//   return name+age
// }

// console.log(new1('zhanfsan ',44))





// 对类的约束
// interface anima{
//   name:string;
//   eat(str:string):void
// }
// class dog implements anima{
//   name:string
//   constructor(name:string){
//     this.name=name
//   }
//   eat(str:string){
//     alert(str)
//   }
// }

// var new9=new dog('够');
// new9.eat('毛')






// // 接口扩展
// interface animal{
//   eat():void
// }
// interface peroson extends animal{
//   watch():void
// }

// class web implements peroson{
//   name:string
//   constructor(name:string){
//     this.name=name
//   }
//   eat():void{
//     console.log(this.name+'我是animal')
//   }
//   watch():void{
//     console.log(this.name+'我是person')
//   }
// }
// var per=new web('菜菜')
// per.eat()
// per.watch()