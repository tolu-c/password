function viewPsd() {
  var eye = document.getElementById("eye");
  if (eye.type === "password") {
    eye.type = "text";
  } else {
    eye.type = "password";
  }
}
// <i class="far fa-eye-slash"></i>
