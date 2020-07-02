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

// function log(target, name, descriptor){
//     let oldValue = descriptor.value;
//     descriptor.value = function(){
//         console.log(`calling ${name} width ${arguments}`);
//         return oldValue.apply(this, arguments);
//     }
//     return descriptor;
// }

// class Math {
//     @log
//     add(a, b){
//         return a + b;
//     }
// }

// let math = new Math();
// const result = math.add(2, 4);
// console.log(result);


// 代理模式
// 介绍：
// 使用者无法访问目标对象
// 中间加代理，通过代理做授权和控制

// 示例：
// 科学上网，访问github
// 明星经纪人
// class RealImg {
//     constructor(filename){
//         this.filename = filename;
//         this.loadFromDisk();
//     }
//     display(){
//         console.log('display...' + this.filename);
//     }
//     loadFromDisk(){
//         console.log('loading...' + this.filename);
//     }
// }

// class ProxyImg {
//     constructor(filename){
//         this.realImg = new RealImg(filename);
//     }
//     display(){
//         this.realImg.display();
//     }
// }

// let proxyImg = new ProxyImg('1.png');
// proxyImg.display();

// 明星
let star = {
    name: '张xx',
    age: 25,
    phone: '13800001111'
}

// 经纪人
let agent = new Proxy(star, {
    get: function(target, key){
        if(key === 'phone'){
            // 返回经纪人自己的电话
            return '16890908787';
        }
        if(key === 'price'){
            // 明星不报价，经纪人报价
            return 120000;
        }
        return target[key];
    },
    set: function(target, key, val){
        if(key === 'customPrice'){
            if(val < 100000){
                throw new Error('价格太低');
            }else{
                target[key] = val;
                return true;
            }
        }
    }
})

console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

agent.customPrice = 90000;

// 代理模式 vs 适配器模式
// 适配器模式：提供一个不同的接口
// 代理模式：提供一模一样的接口

// 代理模式 vs 装饰器模式
// 装饰器模式：扩展功能，原有功能不变可直接使用
// 代码里模式：显示原有功能，但是经过限制或阉割之后的