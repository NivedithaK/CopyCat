let button1 = document.getElementById("copyButton");

button1.onclick = () => {
  changeText();
}


function changeText() {
        document.getElementById("textToChange").innerHTML = document.getElementById("textToChange").innerHTML + "<br> " + document.getElementById('mainTextField').value;
      }
