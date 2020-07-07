// 状态模式
// 介绍：
// 一个对象有状态变化
// 每次状态变化都会触发一个逻辑
// 不能总是用if...else来控制

// 示例：
// 交通信号灯不同颜色的变化

// 状态
// class State {
//     constructor(color){
//         this.color = color;
//     }
//     handle(context){
//         console.log(`turn to ${this.color}`);
//         context.setState(this);
//     }
// }

// // 主体
// class Context {
//     constructor(){
//         this.state = null;
//     }
//     getState(){
//         return this.state;
//     }
//     setState(state){
//         this.state = state;
//     }
// }

// let context = new Context();

// let green = new State('green');
// let yellow = new State('yellow');
// let red = new State('red');

// // 绿灯亮了
// green.handle(context);
// console.log(context.getState());

// // 黄灯亮了
// yellow.handle(context);
// console.log(context.getState());

// // 红灯亮了
// red.handle(context);
// console.log(context.getState());

// 场景:
// 有限状态机


// import StateMachine from 'javascript-state-machine';
// import $ from 'jquery';

// // 初始化状态机模式
// let fsm = new StateMachine({
//     init: '收藏',
//     transitions: [
//         {
//             name: 'doStore',
//             from: '收藏',
//             to: '取消收藏'
//         },
//         {
//             name: 'deleteStore',
//             from: '取消收藏',
//             to: '收藏'
//         }
//     ],
//     methods: {
//         // 监听执行收藏
//         onDoStore: function(){
//             alert('收藏成功');  //可以post请求
//             updateText();
//         },

//         // 监听取消收藏
//         onDeleteStore: function(){
//             alert('已经取消收藏');
//             updateText();
//         }
//     }
// })

// let $btn = $('#btn1');

// // 按钮点击事件
// $btn.click(function(){
//     if(fsm.is('收藏')){
//         fsm.doStore();
//     }else{
//         fsm.deleteStore();
//     }
// })

// // 更新按钮的文案
// function updateText(){
//     $btn.text(fsm.state);
// }

// // 初始化文案
// updateText();


import StateMachine from 'javascript-state-machine';

let fsm = new StateMachine({
    init: 'pending',
    transitions: [
        {
            name: 'resolve',
            from: 'pending',
            to: 'fullfilled'
        },
        {
            name: 'reject',
            from: 'pending',
            to: 'rejected'
        }
    ],
    methods: {
        onResolve: function(state, data){
            // state - 当前状态机实例;
            // data - fsm.resolve(xxx)传递来的参数
            data.successList.forEach(fn => fn());
        },
        onReject: function(state, data){
            data.failList.forEach(fn => fn());
        }
    }
})

// 定义Promise
class MyPromise {
    constructor(fn){
        this.successList = [];
        this.failList = [];

        fn(() => {
            fsm.resolve(this);
        }, () => {
            // reject函数
            fsm.reject(this);
        })
    }
    then(successFn, failFn){
        this.successList.push(successFn);
        this.failList.push(failFn);
    }
}

// 测试代码
function loadImg(src){
    const promise = new MyPromise(function(resolve, reject){
        let img = document.createElement('img');
        img.onload = function(){
            resolve(img);
        }
        img.onerror = function(){
            reject();
        }
        img.src = src;
    })
    return promise;
}

let src = 'https://img.mukewang.com/user/5a9fc8070001a82402060220-100-100.jpg';
let result = loadImg(src);

result.then(function(){
    console.log('ok1');
}, function(){
    console.log('fail1');
})

result.then(function(){
    console.log('ok2');
}, function(){
    console.log('fail2');
})
