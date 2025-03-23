let lowerData = "abcdefghijklmnopqrstuvwxyz";
let upperdata = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numdata = "1234567890";
let symData = "!@#$%^&*()";

let passwordinput = document.getElementById('passwordinput');
let passlength = document.getElementById('passlength');
let upper = document.getElementById('upper');
let lower = document.getElementById('lower');
let num = document.getElementById('num');
let sym = document.getElementById('sym');

function generateNumber(data){
   return data[Math.floor(Math.random() * data.length)];
} 
function generate(password = ""){
    if(upper.checked){
        password = password+generateNumber(upperdata);
    }
    if(lower.checked){
        password = password+generateNumber(lowerData);
    }
    if(num.checked){
        password = password+generateNumber(numdata);
    }
    if(sym.checked){
        password = password+generateNumber(symData);
    }
    if(password.length<passlength.value){
        return generate(password);
    }
    console.log(password);
    passwordinput.value= password;
} 
function myfun(){
    generate();
}
function copied(){
    alert("text copied");
}
