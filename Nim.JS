


document.getElementById("btnChangePlayer").addEventListener("click", function (e) {

  let radio = document.getElementsByName("lik");
  if (radio[0].checked) {

    stickor.length = stickor.length - 1
  }
  if (radio[1].checked) {
    stickor.length = stickor.length - 2

  }
  if (radio[2].checked) {
    stickor.length = stickor.length - 3


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


  let stickorArray = document.getElementById("arrayFunc");
  stickorArray.innerHTML = stickor
  let arrayScore = document.getElementById("array");

  arrayScore.innerHTML = stickor.length;
  if (stickor.length <= 0) {
    alert("The Winner is Player" + index);
    if (confirm("vill du spela igen")) {

      location.reload();
    }

  }

});
var stickor = ["I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I",]
for (let i = 0; i <= stickor.length; i++) {

  (stickor[i]);


}


