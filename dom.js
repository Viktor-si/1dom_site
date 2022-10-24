let input1 = document.getElementById("input1");
let title = document.getElementById("title");
//document.getElementById("javascript");



var okButton = document.querySelector(".button-1");
//if (okButton) {
    function clickForOkDiv() {
        title.innerHTML = input1.value;
        input1.value = "";
    }
//}




var cancelButton = document.querySelector(".button-2");

    function clickForCanceDiv() {
        //title.innerHTML = input.inputMode;
        input1.value = "";
        //console.log(input.innerHTML);
    } 
    