alert("Hi from rest-client! Trying jquery.")
$.ajax({
    url: "http://localhost:8080/countries",
    success: function(data) {
        alert(data[0].Code)
        alert(data[0].Name)
        alert(JSON.stringify(data));
    }
});

alert("Now trying vanilla javascript");

function loadXMLDoc() {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 ) {
           if(xmlhttp.status == 200){
               document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
           }
           else if(xmlhttp.status == 400) {
              alert('There was an error 400')
           }
           else {
               alert('something else other than 200 was returned')
           }
        }
    }

    xmlhttp.open("GET", "http://localhost:8080/countries", true);
    xmlhttp.send();
}
loadXMLDoc();

