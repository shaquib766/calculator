//calculator
const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
function ClearDisplay(){
    display.value = "";
}
function delOne(){
    display.value = display.value.toString().slice(0, -1);
}
function calc(){
    try{
    display.value = eval(display.value);
}
    catch(error){
        display.value = "Error"
    }
}