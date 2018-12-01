let button1 = document.getElementbyId("copyButton")

button1.onclick = () => alert("Hello");
  #button1.addEventListener("click", handler); // Thanks!


function changeText() {
        document.getElementById("textToChange").innerHTML = document.getElementById("textToChange").innerHTML + "\n " + document.getElementById('mainTextField').value;
      }
