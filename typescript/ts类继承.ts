// ts 类
// class personts {
//   name: string;
//   constructor(n: string) {//实例化的时候触发
//     this.name = n
//   };
//   getName(): void {
//     alert(this.name)
//   }
//   setName(name: string): void {
//     this.name = name
//   }
// }
// var per = new personts('张三');
// per.getName()
// per.setName('李四')
// per.getName()




// ts继承
// class personts1 {
//   name: string;
//   constructor(name: string) {
//     this.name = name
//   }
//   jump():string{
//     return this.name
//   }
// }

// class web extends personts1 {
//   constructor(name: string) {
//      super(name)
//   }
//   jump():string{
//     return '我是你。。'
//   }
// }
// var webts=new web('李四')
// alert(webts.jump())
//如果子类与父类里面有一样名称的方法，使用子类的





// 类的修饰符
// public 公有  当前类 子类 类外部可以访问 默认
// protected  保护类型  当前类 子类可以访问
// private 私有   当前类可以访问





//类的静态属性  静态方法 static
// class personOne {
//   name: string
//   static age:number=2
//   constructor(name: string) {
//     this.name = name
//   }
//   run():void{
//     alert('我是实例里面的方法'+this.name)
//   }
//   static work():void{//静态方法
//     alert('我是静态里面的方法'+this.age)
//   }
// }
// var newOne= new personOne('张三')
// newOne.run()
// personOne.work()




// 类的多态
// class personOne {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   run():any{
//     alert('我是父类')
//   }
// }
// class cat extends personOne{
//   constructor(name: string) {
//     super(name)
//   }
//   run():void{
//     alert('我是猫'+this.name)
//   }
// }

// class dog extends personOne{
//   constructor(name: string) {
//     super(name)
//   }
//   run():void{
//     alert('我是狗'+this.name)
//   }
// }
// var animal=new cat('吃老鼠')
// animal.run()
// var animal1=new dog('吃肉')
// animal1.run()


// 定义方法自己不去实现，他的子类去实现,每个子类有自己的表现




// 抽象方法


// abstract class personOne {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   abstract run():any
// }
// class child extends personOne{
//   constructor(name: string) {
//     super(name)
//   }
//   run():any{
//     alert(this.name)
//   }
// }
// var child1=new child('张三')
// child1.run()

// 定义抽象方法里面不能被实例化，必须子类来进行实现





