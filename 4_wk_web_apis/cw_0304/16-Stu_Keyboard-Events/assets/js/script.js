function keydownAction(event) {
  // TODO: Complete keydown function
  const key = event.key;
  const code = event.code;

  document.querySelector("#key").innerHTML = key;
  document.querySelector("#code").innerHTML = code;
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
