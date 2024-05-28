//selector 
const container = document.getElementById(`container`,`output`,`c`,`seven`,`into`,`dev`,`eariser`,`eight`,`nine`,`four`,`five`,"six",`one`,`three`,`two`,`equal`,`zero`,`dot`);
const plus =document.getElementById(`plus`)
const minus =document.getElementById(`minus`)
const dev =document.getElementById(`dev`)
const into =document.getElementById(`into`)
const percent =document.getElementById(`percent`)
const clean = document.getElementById('c')
const eraser =document.getElementById('eraser')

//function
const addNumber = (x)=>{ output.value +=x.value;}
const Plus =()=>output.value += plus.innerText;
const Minus =()=>output.value += minus.innerText;
const Dev = ()=> output.value += dev.innerText;
const Into =()=> output.value += into.innerText;
const Percent =()=> output.value += percent.innerText;
const Eraser =() => {output.value= output.value.toString().slice(0,-1)}
function calc(){output.value = eval(output.value)}
const Clean =()=>output.value = null;