// content.js
console.log("On puzzgrid");

const giveUpButton = document.createElement("button")
giveUpButton.classList.add("give-up-button")
giveUpButton.textContent = "Give up"
giveUpButton.setAttribute("disabled", "")

tileContainer = document.querySelector("#tilecontainer")

if (tileContainer) {
  tileContainer.append(giveUpButton)
}

document.querySelector(".give-up-button").addEventListener("click", function() {
  runScriptOnPage()
})

document.querySelector("#start").addEventListener("click", function() {
  giveUpButton.removeAttribute("disabled")
})

function runScriptOnPage() {
  var actualCode = 'finishItOff()';
  var script = document.createElement('script');
  script.textContent = actualCode;
  (document.head||document.documentElement).appendChild(script);
  script.remove();
}
