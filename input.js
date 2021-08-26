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
        var liElement = document.createElement('li');
        myOrderedList.appendChild(liElement);
        
        if(bishNumber.value % boshNumber.value == 0){
            var bishLi = document.createElement('li');
            bishLi.innerHTML = "Bish-Bosh";
            continue;
        }

        else if(index % bishNumber.value == 0) {

        
            continue;
        }

        else if(index % boshNumber.value == 0){

            continue;
        }
    }
        
    
}

