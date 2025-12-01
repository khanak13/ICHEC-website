function F1(e) {
  var picHeight = document.getElementById("12").offsetHeight;
  var picWidth = document.getElementById("12").offsetWidth;
  console.log(picHeight);
  document.getElementById('13').style.width = picWidth+'px';
  document.getElementById('13').style.height = picHeight+'px';
}
F1();
window.addEventListener('resize', F1);
