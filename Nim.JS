document.getElementById("btnChangePlayer").addEventListener("click", function(e) {
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
});



var stickor = [[I],[I],[I],[I],[I],[I],[I],[I],[I],[I],[I],[I],[I],[I],[I],[I],[I],[I],[I],[I],[I]]
//const stickor = 21; 

for (let i = 0; i < stickor.length; i++){
console.log("this far");
    console.log([i]);
}

