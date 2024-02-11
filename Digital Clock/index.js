const clock = document.querySelector('#clock');            // or we can use document.getElementbyID('')
let date = new Date();

setInterval(function(){
    console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
},1000)    
//time is in milli seconds 1sec = 1000 milli sec
