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

class jQuery{
    constructor(selector){
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(selector));
        let len = dom ? dom.length : 0;
        for(let i = 0; i < len; i++){
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || '';
    }
    append(node){
        // ...
    }
    addClass(className){
        // ...
    }
    html(data){
        // ...
    }
}

window.$ = function(selector){
    return new jQuery(selector);
}

var $p = $('p');
console.log($p);
console.log($p.addClass);