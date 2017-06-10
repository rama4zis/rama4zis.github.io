
var bagian1 = document.getElementById('bagian1');
var bagian2 = document.getElementById('bagian2');

bagian1.addEventListener("mouseenter", mouseMasuk);
bagian1.addEventListener("mouseleave", mouseKeluar);
function mouseMasuk(){
  bagian1.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
  bagian1.style.color           = "#fff";
  bagian1.style.transition = "1s";
}
function mouseKeluar(){
  bagian1.style.backgroundColor = "initial";
  bagian1.style.color           = "#000";
}

bagian2.addEventListener('mouseenter', function(){
  bagian2.style.backgroundColor = "rgba(235, 117, 107, 0.75)";
  bagian2.style.color = "#fff";
  bagian2.style.transition = "1s";
});
bagian2.addEventListener('mouseleave', function(){
  bagian2.style.backgroundColor = "initial";
  bagian2.style.color = "#000";
});
