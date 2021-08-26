var slider1 = document.getElementById("antal");
var output1 = document.getElementById("first-label-number");

output1.innerHTML = slider1.value;

slider1.oninput = function() {
    output1.innerHTML = this.value;
}

var bishNumber = document.getElementById("bish");
var output2 = document.getElementById("second-label-number");

output2.innerHTML = bishNumber.value;

bishNumber.oninput = function() {
    output2.innerHTML = this.value;
}

var boshNumber = document.getElementById("bosh");
var output3 = document.getElementById("third-label-number");

output3.innerHTML = boshNumber.value;

boshNumber.oninput = function() {
    output3.innerHTML = this.value;
}

var listan = document.getElementById('lista');
listan.innerHTML = '';


var myOrderedList = document.getElementById('lista');
 
function AddListItem() {
    
    myOrderedList.innerHTML = '';
    for (let index = 1; index <= slider1.value; index++) {
        
        if(index % bishNumber.value == 0 && index % boshNumber.value == 0){
            let textnode = document.createTextNode('Bish-bosh');
            let li = document.createElement('li');
            li.appendChild(textnode);
            li.style.color = "#FE840E";
            myOrderedList.appendChild(li);
            continue;
        }
    
        else if(index % bishNumber.value == 0) {
            let textnode = document.createTextNode('Bish');
            let li = document.createElement('li');
            li.appendChild(textnode);
            li.style.color = "red";
            li.style.fontSize = "2em";
            myOrderedList.appendChild(li); 
            continue;
        }
    
        else if(index % boshNumber.value == 0){
            let textnode = document.createTextNode('Bosh');
            let li = document.createElement('li');
            li.appendChild(textnode);
            li.style.color = "blue";
            li.style.fontSize = "2em";
            myOrderedList.appendChild(li);
            continue;
        }
        
        else {
            var liElement = document.createElement('li');
            myOrderedList.appendChild(liElement);
        }
    }
        
}






