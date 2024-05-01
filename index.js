
var num1= Number(document.getElementById("number1").innerHTML=  Math.floor(Math.random() * 100));
var num2= Number(document.getElementById("number2").innerHTML=  Math.floor(Math.random() * 100));

var inputBoxValue=Number(document.getElementById("inputbox").value);

console.log(inputBoxValue)


var systemResult=num1+num2;
console.log(systemResult);


function valuation(){
    var inputBoxValue=Number(document.getElementById("inputbox").value);
   
    if (inputBoxValue==systemResult) {
    
        document.getElementById("resultAnounce").innerHTML= "Thakkudu Correct Answer !!!";
        
        var audio = new Audio("sounds/correct.mp3");
        audio.play();
        document.getElementById("resultAnounce").style.color="green";
        
    } else {
        document.getElementById("resultAnounce").innerHTML= "Sorry Thakkudu wrong Answer"
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        document.getElementById("resultAnounce").style.color="red";
        
    }
    
    }
    
    function refreshPage(){
    
        window.location.reload();
    } 
    



