let sum = 21;

document.getElementById("btnChangePlayer").addEventListener("click", function(e) {
  
  let radio = document.getElementsByName("lik");
  if(radio[0].checked){
    alert("cow")
    sum = sum - 1 
  }
  if(radio[1].checked){
    sum = sum - 2
    alert("cat")
  }
  if(radio[2].checked){
    sum = sum - 3
    alert("scooby")

  }
  
  let index = document.getElementById("player_turn").valueAsNumber + 1;

	if (index > 2) {
    index = 1;
    
   

  }
  
  let list = document.getElementsByClassName("active");
  for (let element of list) {
  	element.classList.remove("active");
  }

  document.getElementById("player_turn").value = index;
  document.getElementById("player" + index).classList.add("active");
  console.log(sum);
  if(sum <= 0){
    alert("the winner is Player "+ index)
    sum = 21;
  }

});



//var stickor = [["I"], ["I"], ["I"], ["I"],["I"], ["I"],["I"],["I"],["I"],["I"], ["I"], ["I"],["I"], ["I"], ["I"], ["I"],["I"], ["I"], ["I"], ["I"]]
//21 arrays i en array; 

//for (let i = 0; i <= stickor.length; i++){
//console.log([i]);
//}



var stickor = ["I", "I", "I", "I","I", "I", "I", "I","I", "I", "I", "I","I", "I", "I", "I","I", "I", "I", "I","I"]
for (let i = 0; i <= stickor.length; i++){
//console.log(stickor[i]);
(stickor[i]);


}


