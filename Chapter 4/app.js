var variable_1="He"
var variable_2=" is a"
var variable_3=" Good Developer"
alert(variable_1+variable_2+variable_3)

//  Illigalegal Variables
// var *myname
// var @MyName
// var &myName
// var #Myname
// var !Myname

//  Legal Variables
var myname
var myName
var MYNAME
var _myName
var $myName

var head="Rules for naming JS variables"
document.getElementById("head").innerHTML=(head);

var para_1="Variable names can only contain, numbers , $ and_ . For example : my_1stVariable"
document.getElementById("para_1").innerHTML=(para_1);
var para_2="Variables must begin with a letter, % or _. For example $name, _name or name"
document.getElementById("para_2").innerHTML=(para_2);
var para_3="Variable names are case Sensitive"
document.getElementById("para_3").innerHTML=(para_3);
var para_4="Variable names should not be JS keywords"
document.getElementById("para_4").innerHTML=(para_4);

