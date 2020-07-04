// const EventEmitter = require('events');

// const emmiter1 = new EventEmitter();
// // 监听som事件
// emmiter1.on('some', info => {
//     console.log('fn1', info);
// })
// // 监听som事件
// emmiter1.on('some', info => {
//     console.log('fn2', info);
// })
// // 触发some事件
// emmiter1.emit('some', 'xxx')

// const EventEmitter = require('events');

// // 继承
// class Dog extends EventEmitter {
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }

// let simon = new Dog('simon');
// simon.on('bark', function(){
//     console.log(this.name,  ' barked');
// })
// setInterval(function(){
//     simon.emit('bark');
// }, 1000)

// stream 自定义事件
// const fs = require('fs');
// const readStream = fs.createReadStream('./data/file1.txt');

// let length = 0;
// readStream.on('data', function(chunk){
//     let len = chunk.toString().length;
//     console.log('len', len);
//     length += len;
// })
// readStream.on('end', function(){
//     console.log('length', length);
// })

const fs = require('fs');
const readline = require('readline');

let rl = readline.createInterface({
    input: fs.createReadStream('./data/file1.txt')
});

let lineNum = 0;
rl.on('line', function(line){
    lineNum++;
})
rl.on('close', function(){
    console.log('lineNum', lineNum);
})