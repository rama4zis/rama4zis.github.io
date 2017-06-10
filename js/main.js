
var bagian1 = document.getElementById('bagian1');
var bagian2 = document.getElementById('bagian2');

bagian1.addEventListener("mouseenter", mouseMasuk);
bagian1.addEventListener("mouseleave", mouseKeluar);
function mouseMasuk(){
  bagian1.style.backgroundColor = "#000";
  bagian1.style.color           = "#fff";
  bagian1.style.transition = "1s";
}
function mouseKeluar(){
  bagian1.style.backgroundColor = "#fff";
  bagian1.style.color           = "#000";
}

bagian2.addEventListener('mouseenter', function(){
  bagian2.style.backgroundColor = "#ea756b";
  bagian2.style.color = "#fff";
  bagian2.style.transition = "1s";
});
bagian2.addEventListener('mouseleave', function(){
  bagian2.style.backgroundColor = "#fff";
  bagian2.style.color = "#000";
});
