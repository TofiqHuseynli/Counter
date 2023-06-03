let container = document.querySelector(".container");
let body = document.getElementById("bd");
let minusBtn = document.querySelector(".minus-btn");
let plassBtn = document.querySelector(".plass-btn");
// let display = document.querySelector(".display")
let displayInput = document.getElementById("inner-text");
let darkMode = document.querySelector(".dark-mode");
let lightMode = document.querySelector(".light-mode");
let point = document.querySelector(".point");



let count = 0
// display.innerHTML=0;
displayInput.value = 0;



plassBtn.addEventListener("click", function () {
    if(!(count >=10)){
        count += 1;
        displayInput.value = count
        // display.innerHTML = count
    }else{
        displayInput.value = 10;
    }
   
});

minusBtn.addEventListener('mousedown',function(){
    minusBtn.style.backgroundColor = "rgb(250, 47, 47)"

})

minusBtn.addEventListener('mouseup',function(){
    minusBtn.style.backgroundColor = "red"

});


plassBtn.addEventListener('mousedown',function(){
    plassBtn.style.backgroundColor = "rgb(1, 167, 1)"

})

plassBtn.addEventListener('mouseup',function(){
    plassBtn.style.backgroundColor = "green"

})



minusBtn.addEventListener("click", function () {
    if (!(count === 0)) {
        count -= 1;
        displayInput.value = count
        // display.innerHTML = count
    }
    else {
        displayInput.value = 0;
    }

});



// ------------------------------------------------------------------------------- Mode Section --------------------------------------------------------------------------------

darkMode.addEventListener('click', function(){
container.style.backgroundColor = "rgb(29, 29, 29)"
darkMode.style.color ="white"
lightMode.style.color = "white";
body.style.backgroundColor = "black";
point.style.transform ="translateX(0px)"


})



lightMode.addEventListener('click', function(){
    
    container.style.backgroundColor = "rgb(221, 218, 218)"
    darkMode.style.color ="black"
    lightMode.style.color = "black";
    body.style.backgroundColor = "white";
    point.style.transform ="translateX(20px)"
    })
    


    