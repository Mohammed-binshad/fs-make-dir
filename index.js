const fs = require("fs");

fs.mkdir('newdir',(err)=>{
    if(err) throw err;
    console.log('new dir created');
})