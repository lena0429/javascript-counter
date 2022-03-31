// set initial count
let count = 0;

// select the value span
const value = document.getElementById("value");

// select all the btns
const btns = document.querySelectorAll(".btn")

// console.log(btns);


// pass in a callback function as the argument to forEach
btns.forEach((btn) => {
   btn.addEventListener("click", (e) => {
       // console.log(e.currentTarget.classList);
       const styles = e.currentTarget.classList;
       if (styles.contains("decrease")) {
           count--;
       } else if (styles.contains("increase")) {
           count++;
       } else if (styles.contains("reset")) {
           count = 0;
       }

       if (count > 0) {
           value.style.color = "orange";
       }

       if (count < 0) {
           value.style.color = 'blue';
       }
       value.textContent = count;

   });
} )