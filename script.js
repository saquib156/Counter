//Set initial value
let count = 0;

//Event DOM Manipulation
const count_val = document.querySelector("#counter");
const btns  = document.querySelectorAll(".btn");

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