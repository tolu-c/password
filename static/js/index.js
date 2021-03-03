let psd = document.querySelector("#password");
let eye = document.querySelector(".eye-icon");
let eyeClose = document.querySelector("#eye");

eye.addEventListener("click", viewPsd);

function viewPsd() {
  if (psd.type === "password") {
    psd.type = "text";
  } else {
    psd.type = "password";
  }
  if (eyeClose.name === "eye-outline") {
    eyeClose.name = "eye-off-outline";
  } else {
    eyeClose.name = "eye-outline";
  }
}
