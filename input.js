var slider1 = document.getElementById("antal");
var output1 = document.getElementById("first-label-number");

output1.innerHTML = slider1.value;

slider1.oninput = function() {
    output1.innerHTML = this.value;
}

var slider2 = document.getElementById("bish");
var output2 = document.getElementById("second-label-number");

output2.innerHTML = slider2.value;

slider2.oninput = function() {
    output2.innerHTML = this.value;
}

var slider3 = document.getElementById("bosh");
var output3 = document.getElementById("third-label-number");

output3.innerHTML = slider3.value;

slider3.oninput = function() {
    output3.innerHTML = this.value;
}



function AddListItem() {

   var myOrderedList = getElementById("theOrderedList");
   var liElement = document.createElement("LI");
   console.log("add");
   myOrderedList = document.appendChild(liElement);
    
}

