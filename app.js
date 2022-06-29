let time = document.querySelector('.time');
const startstop = document.querySelector('#startstop');
const reset = document.querySelector('.reset');
const lap = document.querySelector(".lap")


let sal= 00;
let sec = 00;
let min = 00;

let t;

let tur=1;


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
    t = setTimeout(add, 10);
}


startstop.onclick=()=>{
    if(startstop.className=="fa-regular fa-circle-play fa-6x"){
        startstop.className="fa-regular fa-circle-pause fa-6x";
        timer();

    }
    else{
        startstop.className="fa-regular fa-circle-play fa-6x";
            clearTimeout(t);
            tur ++ 
        if(tur>0){
        lap.innerHTML += 
        `
        <table class="table table-dark">

       <tbody>
            <tr>
                <th scope="row">Lap ${tur-1}</th>
                <td>${min} : ${sec} : ${sal} </td>
        </table>
        `
            
    }
    // console.log(startstop.className);
}

reset.onclick = function() {
    time.textContent = "00:00:00";
    sal = 00; sec = 00; min = 00; 

 lap.innerHTML = ""

}
}

// turnery yöntemi
// startstop.onclick=()=>{
//     startstop.className=="fa-regular fa-circle-play fa-6x" ? (startstop.className="fa-regular fa-circle-pause fa-6x",
//     timer()) : (startstop.className="fa-regular fa-circle-play fa-6x",
//     clearTimeout(t))
// }