const count = document.querySelector("#count");
function resetFunction() {
  count.innerHTML = 0;
}
function decreaseFunction() {
  count.innerHTML -= 1;
}
function increaseFunction() {
  let currentCount = parseInt(count.innerHTML, 10);
  currentCount +=1;
  count.innerHTML = currentCount.toString();
}
function colorControl() {
  if (count.innerHTML == 0) {
    count.classList.add("reset");
    count.classList.remove("negative");
    count.classList.remove("positive");
  }
  else if (count.innerHTML < 0) {
    count.classList.remove("reset");
    count.classList.add("negative");
    count.classList.remove("positive");
  }
  else if (count.innerHTML > 0) {
    count.classList.remove("reset");
    count.classList.remove("negative");
    count.classList.add("positive");
  }
}