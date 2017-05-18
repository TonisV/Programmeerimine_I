
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = dataRecived;

var timers = [];

function readData(request){

    xhr.open("POST", "app.php", true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    if (request === 'hello') {

        clearTimers();
        console.log('Hello OK');

        xhr.send(
            "firstname=" + encodeURI(document.getElementById("firstname").value) +
            "&lastname=" + encodeURI(document.getElementById("lastname").value)
        );

    }

    if (request === 'time') {

        console.log('Time OK');

        xhr.send("time=true");

        timers.push(
            setTimeout(function() {
                readData('time');
            }, 1000)
        );

    }

    if (request === 'news') {

        clearTimers();
        console.log('News OK');

        var newsNumber = document.getElementById("newsId").value;
        xhr.send(
            "news=true&id=" + encodeURI(newsNumber)
        );

    }

}

function clearTimers() {
    for (var i = 0; i < timers.length; i++) {
        clearTimeout(timers[i]);
    }
}

function dataRecived(){
    if(xhr.readyState == 4){
        document.getElementById("layer1").innerHTML = xhr.responseText;
    }
}
