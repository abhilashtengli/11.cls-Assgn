document.addEventListener("keydown", (e) => {
  var h1 = document.getElementById("key");
  var h2 = document.getElementById("keyCode");

  var Keyval = e.key;
  var KeyCode = e.keyCode;

  h1.innerText = "You pressed:  " + Keyval;

  h2.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  h2.style.backgroundColor = "aliceblue";
  h2.innerText = KeyCode;
});
