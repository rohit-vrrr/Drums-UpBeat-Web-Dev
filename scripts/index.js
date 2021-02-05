// for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", () => alert("Click!"));
// }

for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].onclick = () => {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
}
