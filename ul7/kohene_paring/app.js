
var xhr=new XMLHttpRequest();

function readData(news){

    xhr.open("GET",  news, false);
    xhr.send();
    document.getElementById("layer1").innerHTML=xhr.responseText;

}