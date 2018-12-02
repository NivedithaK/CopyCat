// BUTTON 1

var button1 = document.getElementById("copyButton");

button1.onclick = () => {
	changeText();
}



function changeText() {
		chrome.storage.sync.get(['value'],function(result){

		})


        document.getElementById("textToChange").innerHTML = document.getElementById("mainTextField").value + " <br> " + document.getElementById("textToChange").innerHTML;
      	var textToSave = document.getElementById("textToChange").innerHTML;
      	chrome.storage.sync.set({'value': textToSave});



      }

// BUTTON 2


var button2 = document.getElementById("copyButton2");

button2.onclick = () => {
	copyToClipboard(document.getElementById("textToChange").innerHTML);
}  

function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

// BUTTON 3

var button3 = document.getElementById("clearButton");

button3.onclick = () => {
	clearAll();
}

function clearAll() {

 	document.getElementById("textToChange").innerHTML = "";

}
