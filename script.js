const turnOnBtn = document.getElementById("turn_on");
const turnOffBtn = document.getElementById("turn_off");

turnOnBtn.addEventListener("click", function(){
    light.style.background = "yellow";
})

turnOffBtn.addEventListener("click", function(){
    light.style.background = "white";
})