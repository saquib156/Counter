//Event DOM Manipulation
var dec_btn = document.querySelector("#decrease");

var reset_btn = document.querySelector("#reset");

var inc_btn = document.querySelector("#increase");

// Function for Increase/Decrease/Reset
function decrease(){
    var count = document.getElementById("counter").textContent;
    count -= 1;
    document.getElementById("counter").innerHTML = count;
}

function increase(){
    var count = document.getElementById("counter").textContent;
    count = Number(count);
    count += 1;
    document.getElementById("counter").innerHTML = count;
}

function reset(){
    document.getElementById("counter").innerHTML = 0;
}

//Event for Increase/Decrease/Reset
dec_btn.addEventListener("click", decrease);

inc_btn.addEventListener("click", increase);

reset_btn.addEventListener("click", reset);