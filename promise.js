'use strict'
let recordingStatus = false;

let recor = new Promise((resolve, reject)=>{
    if (recordingStatus == true){
        resolve("Records ware uploded");
    }else {
        reject("Records ware not uploded");
    }
});

recor
.then((message)=>{
    console.log(1111,message);
})
.catch((message)=>{
    console.log(message);
})