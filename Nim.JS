//let sum = stickor.length;



document.getElementById("btnChangePlayer").addEventListener("click", function(e) {
  
  let radio = document.getElementsByName("lik");
  if(radio[0].checked){
    alert(" - 1")
    stickor.length = stickor.length - 1 
  }
  if(radio[1].checked){
    stickor.length = stickor.length - 2 
    alert(" - 2")
  }
  if(radio[2].checked){
    stickor.length = stickor.length - 3 
    alert(" - 3")

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
  //console.log(sum);
  //if(sum <= 0){
    //alert("the winner is Player "+ index)
  //  sum = 21;
  //}

  let stickorArray = document.getElementById("arrayFunc");
  stickorArray.innerHTML = stickor
  let arrayScore = document.getElementById("array");

  arrayScore.innerHTML = stickor.length;
  if(stickor.length <= 0){
  alert("The Winner is Player"+ index);
  stickor.length = 21
  }
});


//let arrayScore = document.getElementById("array");



//var stickor = [["I"], ["I"], ["I"], ["I"],["I"], ["I"],["I"],["I"],["I"],["I"], ["I"], ["I"],["I"], ["I"], ["I"], ["I"],["I"], ["I"], ["I"], ["I"]]
//21 arrays i en array; 

//for (let i = 0; i <= stickor.length; i++){
//console.log([i]);
//}



var stickor = ["I", "I", "I", "I","I", "I", "I", "I","I", "I", "I", "I","I", "I", "I", "I","I", "I", "I", "I","I",]
for (let i = 0; i <= stickor.length; i++){
//console.log(stickor[i]);
(stickor[i]);
//arrayScore.innerHTML = stickor.length;


}


