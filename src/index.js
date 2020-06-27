// 面向对象三要素：继承、封装、多肽
// 继承
// 1、People是父类，公共的，不仅仅服务于Student
// 2、继承可以将公共方法抽离出来，提高复用，减少冗余
// 封装：
// 1、减少耦合，不该外露的不外露
// 2、利于数据、接口的权限管理
// 3、ES6目前不支持，一般认为_开头的属性是private
// 多肽
// 1、同一个接口，不同表现
// 2、JS应用极少
// 3、需要结合java等语言的接口、重写、重载等功能
// 1、保持子类的开放性和灵活性
// 2、面向接口编程
// 3、JS极少用，了解即可

// // 父类
// class People{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         alert(`${this.name} eat something`);
//     }
//     speak(){
//         alert(`My name is ${name}, age ${this.age}`);
//     }
// }

// // 子类 继承父类
// class Student extends People{
//     constructor(name, age, number){
//         super(name, age);
//         this.number = number;
//     }
//     study(){
//         alert(`${this.name} study`);
//     }
// }

// let xiaoming = new Student('xiaoming', 10, 'A1');
// xiaoming.study();
// alert(xiaoming.number);
// xiaoming.eat();

// let xiaohong = new Student('xiaohong', 11, 'A2');
// xiaohong.study();
// alert(xiaohong.number);
// xiaohong.eat();

// // 多肽：定义一个接口，但是可以在子类中实现不同的功能
// class People {
//     constructor(name){
//         this.name = name;
//     }
//     saySomething(){

//     }
// }

// class A extends People {
//     constructor(name){
//         super(name);
//     }
//     saySomething(){
//         alert('I am A');
//     }
// }

// class B extends People {
//     constructor(name){
//         super(name);
//     }
//     saySomething(){
//         alert('I am B');
//     }
// }

// let a = new A('a');
// a.saySomething();

// let b = new B('b');
// b.saySomething();

// class jQuery{
//     constructor(selector){
//         let slice = Array.prototype.slice;
//         let dom = slice.call(document.querySelectorAll(selector));
//         let len = dom ? dom.length : 0;
//         for(let i = 0; i < len; i++){
//             this[i] = dom[i];
//         }
//         this.length = len;
//         this.selector = selector || '';
//     }
//     append(node){
//         // ...
//     }
//     addClass(className){
//         // ...
//     }
//     html(data){
//         // ...
//     }
// }

// window.$ = function(selector){
//     return new jQuery(selector);
// }

// var $p = $('p');
// console.log($p);
// console.log($p.addClass);

// class House {
//     constructor(city){
//         this.city = city;
//     }
//     showCity(){
//         alert(`house in ${this.city}`);
//     }
// }

// class People {
//     constructor(name, house){
//         this.name = name;
//         this.house = house;
//     }
//     saySomething(){

//     }
// }

// class A extends People {
//     constructor(name, house){
//         super(name, house);
//     }
//     saySomething(){
//         alert('I am A');
//     }
// }

// class B extends People {
//     constructor(name, house){
//         super(name, house);
//     }
//     saySomething(){
//         alert('I am B');
//     }
// }

// let aHouse = new House('Beijing');
// let a = new A('a', aHouse);
// a.saySomething();

// let b = new B('b');
// b.saySomething();

// 设计模式定义
// 按照哪一种思路或者标准来实现功能
// 功能相同，可以有不同的设计方案来实现
// 伴随着需求的增加，设计的作用才能体现出来

// 《UNIX/LINUX设计哲学》
// 准则1：小即是美
// 准则2：让每个程序只做好一件事
// 准则3：快速建立原型
// 准则4：舍弃高效率而取可移植性
// 准则5：采用纯文本来存储数据
// 准则6：充分利用软件的杠杆效应（软件复用）
// 准则7：使用shell脚本来提高杠杆效应和可移植性
// 准则8：避免强制性的用户界面
// 准则9：让每个程序都成为过滤器

// 小准则：允许用户定制环境
// 小准则：尽量使操作系统内核小而轻量
// 小准则：使用小写字母并尽量简写
// 小准则：沉默是金
// 小准则：各部分之和大于整体
// 小准则：寻求90%的解决方案

// SOLID五大设计原则
// S-单一职责原则(single)
// O-开发封闭原则
// L-李氏置换原则
// I-接口独立原则
// D-依赖倒置原则


// S-单一职责原则
// 一个程序只做好一件事
// 如果功能过于负责就拆分开，每个部分保持独立

// O-开发封闭原则
// 对扩展开放，对修改封闭
// 增加需求时，扩展新代码，而非修改已有代码
// 这是软件设计的终极目标

// L-李氏置换原则
// 子类能覆盖父类
// 父类能出现的地方子类就能出现
// JS中使用较少

// I-接口独立原则
// 保持接口的单一独立，避免出现“胖接口”
// JS中没有接口，使用较少
// 类似于单一职责原则

// D-依赖倒置原则
// 面向接口编程，依赖于抽象而不依赖于具体
// 使用方只关注接口而不关注具体类的实现
// JS中使用较少（没有接口&弱类型）

// 设计原则总结：
// SO体现较多，详细介绍
// LID体现较少，但是要了解其用以

// function loadImg(src){
//     let promise = new Promise(function(resolve, rehect){
//         let img = document.createElement('img');
//         img.onload = function(){
//             resolve(img);
//         }
//         img.onerror = function(){
//             reject('图片加载失败');
//         }
//         img.src = src;
//     });
//     return promise;
// }

// let src = 'https://img.mukewang.com/user/5a9fc8070001a82402060220-100-100.jpg';
// let result = loadImg(src);
// result.then(function(img){
//     alert(`width: ${img.width}`);
//     return img;
// }).then(function(img){
//     alert(`height: ${img.height}`);
//     return img;
// }).then(function(img){
//     alert(img.src);
// }).catch(function(err){
//     alert(err);
// })

// 23种设计模式
// 创建型
// 1、工厂模式（工厂方法模式，抽象工厂模式，建造者模式）
// 2、单例模式
// 3、原型模式
// 组合型
// 1、适配器模式
// 2、装饰器模式
// 3、代理模式
// 4、外观模式
// 5、桥接模式
// 6、组合模式
// 7、享元模式
// 行为型
// 1、策略模式
// 2、模板方法模式
// 3、观察者模式
// 4、迭代器模式
// 5、职责链模式
// 6、命令模式
// 7、备忘录模式
// 8、状态模式
// 9、访问者模式
// 10、中介者模式
// 11、解释器模式

// class Car{
//     constructor(name, number, mile){
//         this.name = name;
//         this.number = number;
//         this.mile = mile;
//     }
//     showInfo(){
//         alert(`车名是：${this.name}，车牌号是：${this.number}`);
//     }
// }

// class Kuai extends Car{
//     constructor(name, number, mile){
//         super(name, number, mile);
//         this.price = 1;
//     }
//     showPrice(){
//         alert(`总价格是：${this.price * this.mile}`);
//     }
// }

// class Zhuan extends Car{
//     constructor(name, number, mile){
//         super(name, number, mile);
//         this.price = 2;
//     }
//     showPrice(){
//         alert(`总价格是：${this.price * this.mile}`);
//     }
// }

// let car1 = new Kuai('奇瑞', '101', 5);
// car1.showInfo();
// car1.showPrice();

// let car2 = new Zhuan('东风', '202', 5);
// car2.showInfo();
// car2.showPrice();

// // 车 父类
// class Car{
//     constructor(number, name){
//         this.number = number;
//         this.name = name;
//     }
// }

// // 快车
// class Kuaiche extends Car{
//     constructor(number, name){
//         super(number, name)
//         this.price = 1;
//     }
// }

// // 专车
// class Zhuanche extends Car{
//     constructor(number, name){
//         super(number, name)
//         this.price = 2;
//     }
// }

// // 行程
// class Trip {
//     constructor(car){
//         this.car = car;
//     }
//     start(){
//         console.log(`行程开始,名称:${this.car.name},车牌号:${this.car.number}`);
//     }
//     end(){
//         console.log(`行程结束,金额:` + this.car.price * 5);
//     }
// }

// let car = new Kuaiche(100, '桑塔纳');
// let trip = new Trip(car);
// trip.start();
// trip.end();

// 一 工厂模式
// class Product {
//     constructor(name){
//         this.name = name;
//     }
//     init(){
//         alert('init');
//     }
//     fn1(){
//         alert('fn1');
//     }
//     fn2(){
//         alert('fn2');
//     }
// }

// class Creator {
//     create(name){
//         return new Product(name);
//     }
// }

// // 测试
// let creator = new Creator();
// let p = creator.create('p1');
// p.init();
// p.fn1();

// // 应用场景:
// // jQuery
// // $('div')和new $('div')有何区别?
// // 1 书写麻烦,链式操作将成为噩梦
// // 2 一旦jquery名字变化,将是灾难性的

// 二 单例模式
// 介绍:
// 系统中被唯一使用
// 一个类只有一个实例
// 示例:
// 登录框,购物车
// class SingleObject {
//     login(){
//         console.log('login...');
//     }
// }
// SingleObject.getInstance = (function(){
//     let instance;
//     return function(){
//         if(!instance){
//             instance = new SingleObject();
//         }
//         return instance;
//     }
// })();

// let obj1 = SingleObject.getInstance();
// obj1.login();
// let obj2 = SingleObject.getInstance();
// obj2.login();
// console.log('obj1 === obj2', obj1 === obj2);    //obj1 === obj2 true
// // 只初始化一次,实例一定是相等的,是真正的单例模式,是唯一的实例

// console.log('==============分割线=================');

// let obj3 = new SingleObject();
// obj3.login();
// console.log('obj1 === obj3', obj1 === obj3);    //obj1 === obj3 false

// 场景
// jQuery只有一个$
// if(window.jQuery !== null){
//     return window.jQuery;
// }else{
//     // 初始化
// }
// 模拟登录框
class LoginForm {
    constructor(){
        this.state = 'hide';
    }
    show(){
        if(this.state === 'show'){
            alert('已经显示');
            return;
        }
        this.state = 'show';
        console.log('登录框已经显示');
    }
    hide(){
        if(this.state === 'hide'){
            alert('已经隐藏');
            return;
        }
        this.state = 'hide';
        console.log('登录框已经隐藏');
    }
}

LoginForm.getInstance = (function(){
    let instance;
    return function(){
        if(!instance){
            instance = new LoginForm();
        }
        return instance;
    }
})()

// 测试
let login1 = LoginForm.getInstance();
login1.show();

let login2 = LoginForm.getInstance();
login2.hide();

console.log('login1 === login2', login1 === login2)