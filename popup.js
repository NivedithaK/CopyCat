var button1 = document.getElementById("copyButton");

button1.onclick = () => {
	console.log(changeText());
	changeText();
	console.log("hello");
	//getSelectionText();
}


function changeText() {
        document.getElementById("textToChange").innerHTML = document.getElementById("textToChange").innerHTML + "<br> " + document.getElementById('mainTextField').value;
      	//document.getElementById("textToChange").innerHTML = getSelectionText();
      }

 function getSelectionText() {
 	console.log("hello");
    var text = window.getSelection();
    console.log(text);
    return text;
}

document.onMouseUp = getSelectionText();


