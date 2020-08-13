// Close button
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// hide click
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// New Item
function addText() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue == '') {
    alert("write something");
  } else {
    document.getElementById("ulBlock").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}