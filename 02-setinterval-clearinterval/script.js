// const intervalId=setInterval(myCallBack,1000,"Hello")
// function myCallBack(a){
//     console.log(a,Date.now())
// }

let intervalId;
function startChange(){
if(!intervalId){
    intervalId=setInterval(changeColor,500)
}
}

function changeColor(){
    if(document.body.style.backgroundColor!=='black'){
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
    }else{
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
    }
}

function stopChange(){
    clearInterval(intervalId)
}
document.getElementById('start').addEventListener('click',startChange)
document.getElementById('stop').addEventListener('click',stopChange)