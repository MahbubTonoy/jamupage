var scene = document.getElementById("scene");
var parallax = new Parallax(scene);

var myInp = document.getElementById("myInp");
var btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function() {
  myInp.select();
  document.execCommand("Copy");
  alert("Discord ID Copied Into The Clipboard!");
}