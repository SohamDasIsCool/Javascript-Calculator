var a="";
var x="";
var y=null;
function display(val)
{
 document.getElementById("textval").innerHTML+=val;
 document.getElementById("textval").value+=val;
 console.log(document.getElementById("textval").value);
 }
function calc()
{
 a = document.getElementById("textval").value;
 x=a.replace("undefined","");
 y = eval(x);
 document.getElementById("textval").innerHTML = y;
 document.getElementById("textval").value = y;
}
function clr()
{
 document.getElementById("textval").value = "";
 document.getElementById("textval").innerHTML="";
}