

var letters = "abcdefghijklmnopqrstuvwxyz";
var helloKey = letters[Math.floor(Math.random() * letters.length)];

document.body.onkeydown = function(keypress_event){  
  var key = keypress_event.key;
  var keyDisplay = document.getElementById("key_display");
  if (key == "r"){
    document.body.style.backgroundColor = "red";
    keyDisplay.style.fontSize = "50px";
  } else if (key == "o"){
    document.body.style.backgroundColor = "orange";
    keyDisplay.style.fontSize = "50px";
  } else if (key == "y"){
    document.body.style.backgroundColor = "yellow";
    keyDisplay.style.fontSize = "50px";
  } else if (key == "g"){
    document.body.style.backgroundColor = "green";
    keyDisplay.style.fontSize = "50px";
  } else if (key == "b"){
    document.body.style.backgroundColor = "blue";
    keyDisplay.style.fontSize = "50px";
  } else if (key == "i"){
    document.body.style.backgroundColor = "indigo";
    keyDisplay.style.fontSize = "50px";
  } else if (key == "v"){
    document.body.style.backgroundColor = "violet";
    keyDisplay.style.fontSize = "50px";
  } else {
    document.body.style.backgroundColor = "rgb(255,255,255)";
    keyDisplay.style.fontSize = "20px";
  }
 
  if (key === helloKey){
    keyDisplay.innerHTML = "Hello";
  } else {
    keyDisplay.innerHTML = key;
  }

  if (key == "roygbiv"){
    keyDisplay.style.fontSize = "100px";
  }
  else {
    keyDisplay.style.fontSize = "20px";
  }

  
};


  
