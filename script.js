//Set initial value
let count = 0;

//Event DOM Manipulation
const count_val = document.querySelector("#counter");
const btns  = document.querySelectorAll(".btn");

/*var reset_btn = document.querySelector("#reset");

var inc_btn = document.querySelector("#increase");*/

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const field_id = e.currentTarget.classList;
        if(field_id.contains('decrease')){
            count--;
        } else if(field_id.contains('increase')){
            count++;
        } else {
            count = 0;
        }

        if(count > 0){
            count_val.style.color = "green";
        }
        if(count < 0){
            count_val.style.color = "red";
        }
        if(count == 0){
            count_val.style.color = "#000";
        }

        count_val.textContent = count;
    });
});

// Function for Increase/Decrease/Reset
/*function decrease(){
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
}*/

//Event for Increase/Decrease/Reset
/*dec_btn.addEventListener("click", decrease);

inc_btn.addEventListener("click", increase);

reset_btn.addEventListener("click", reset);*/