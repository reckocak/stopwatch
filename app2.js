let time = document.querySelector('.time');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const icon= document.querySelector('#startstop')

let sal= 0;
let sec = 0;
let min = 0;

let t=0;


function tick(){
    sal++;
    if(sal>99) {
        sal=0;
        sec++;
    }
    if (sec >= 60) {
        sec = 0;
        min++;
    
    }
}
function add() {
    tick();
    time.textContent = (min > 9 ? min : "0" + min) 
        	 + ":" + (sec > 9 ? sec : "0" + sec)
       		 + ":" + (sal > 9 ? sal : "0" + sal);
    timer();
}
function timer() {
    t = setInterval(add, 10);
}


icon.className= 'fa-regular fa-circle-play fa-6x'

start.onclick = () =>{
    if (icon.className= 'fa-regular fa-circle-play fa-6x') {
        icon.className='fa-regular fa-circle-pause fa-6x'
        clearInterval(t);

    }else {
        icon.className='fa-regular fa-circle-play fa-6x';
        timer();
    }
};
timer();
// start.onclick = timer;
// stop.onclick = function() {
//     clearTimeout(t);
// }
reset.onclick = function() {
    time.textContent = "00:00:00";
    sal = 0; sec = 0; min = 0; 
}