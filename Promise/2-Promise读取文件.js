// 引入 fs 模块
const fs = require('fs')

// 2. 调用方法读取文件
// fs.readFile('../resource/knowledge.md', (err, data)=>{
//     if(err) throw err;
//     console.log(data.toString());   
// });

// 3. 使用Promise封装
const p = new Promise((resolve, reject)=>{
    fs.readFile("../resource/knowledge1.md", (err, data)=>{
        if(err) reject(err);
        resolve(data);
    })
});

p.then((value)=>{
    console.log(value.toString());
}, (reason)=>{
    console.log('读取失败');
})