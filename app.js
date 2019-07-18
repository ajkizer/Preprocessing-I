document.addEventListener("DOMContentLoaded", function() {
  setTimeout(typeWriter, 3500);
});
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(nameWriter, 500);
});

let typetext = document.getElementById("type");
let nametext = document.getElementById("name");

let i = 0;
let txt = "Web Developer";
/* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").style.marginBottom = "0";
    typetext.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, Math.random() * 120 + 130);
  }
}

let j = 0;
let name = "Anthony Kizer";

function nameWriter() {
  if (j < name.length) {
    nametext.innerHTML += name.charAt(j);
    j++;
    setTimeout(nameWriter, Math.random() * 70 + 100);
  }
}
