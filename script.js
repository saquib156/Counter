//Set initial value
let count = 0;

//Event DOM Manipulation
const count_val = document.querySelector("#counter");
const btns  = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        } else if(styles.contains('increase')){
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