// 适配器模式
// 介绍：
// 旧接口格式和使用者不兼容
// 中间加一个适配转换接口

// 代码演示
// class Adaptee {
//     specificRequest(){
//         return '德国标准插头';
//     }
// }

// class Target {
//     constructor(){
//         this.adaptee = new Adaptee()
//     }
//     request(){
//         let info = this.adaptee.specificRequest();
//         return `${info} - 转换器 - 中国标准插头`;
//     }
// }

// let target = new Target();
// let res = target.request();
// console.log(res);

// 装饰器模式
// 介绍：
// 为对象添加新功能
// 不改变其原有的结构和功能
// class Circle {
//     draw(){
//         console.log('画一个圆形');
//     }
// }

// class Decorator {
//     constructor(circle){
//         this.circle = circle;
//     }
//     draw(){
//         this.circle.draw();
//         this.setRedBorder(circle);
//     }
//     setRedBorder(circle){
//         console.log('设置红色边框');
//     }
// }

// let circle = new Circle();
// circle.draw();

// console.log('---------分割线---------');

// let dec = new Decorator(circle);
// dec.draw();

// @testDec
// class Demo {

// }

// function testDec(target){
//     target.isDec = true;
// }
// alert(Demo.isDec);

// function testDec(isDec){
//     return function(target){
//         target.isDec = isDec;
//     }
// }

// @testDec(false)
// class Demo {

// }

// alert(Demo.isDec);

// function mixins(...list){
//     return function(target){
//         Object.assign(target.prototype, ...list);
//     }
// }

// const Foo = {
//     foo(){
//         alert('foo');
//     }
// }

// @mixins(Foo)
// class MyClass{

// }

// let obj = new MyClass();
// obj.foo();

// function readOnly(target, name, descriptor){
//     descriptor.writable = false;
//     return descriptor;
// }

// class Person {
//     constructor(){
//         this.first = 'A';
//         this.last = 'B';
//     }

//     @readOnly
//     name(){
//         return `${this.first} ${this.last}`;
//     }
// }

// let p = new Person();
// console.log(p.name());
// p.name = function(){
//     alert(100);
// }

function log(target, name, descriptor){
    let oldValue = descriptor.value;
    descriptor.value = function(){
        console.log(`calling ${name} width ${arguments}`);
        return oldValue.apply(this, arguments);
    }
    return descriptor;
}

class Math {
    @log
    add(a, b){
        return a + b;
    }
}

let math = new Math();
const result = math.add(2, 4);
console.log(result);