document.addEventListener('checkPage', function() {
  var button1 = document.getElementById('checkPage'),
    content = document.getElementById('printtext').value;
  button1.onclick = function() {
    content.innerHTML = document.getElementById('text1').value;
  };
}
