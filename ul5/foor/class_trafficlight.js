class TrafficLight {

    constructor(layerName, light) {

        this.layer = document.getElementById(layerName);
        this.light = 'green';

        window[layerName + '_wh'] = this;

        this.layer.innerHTML =
            '<button onclick="">Roheline</button>' +
            '<button onclick="">Kollane</button>' +
            '<button onclick="">Punane</button>' +
            '<input type="button" value="&lt;" onClick="' + layerName + '_wh.decrease();" />' +
            '<input type="text" id="' + layerName + '_answer" style="width: 50px" disabled />' +
            '<input type="button" value="&gt;" onClick="' + layerName + '_wh.enlarge();" /><br>' +
            '</p>';

        this.answer  = document.getElementById(layerName + '_answer');
        this.show();

    }

    changeLight() {
        this.light = light;
        this.show();
    }

    show() {
        this.answer.value = this.light;
    }
}

<!doctype html>
<html>
<head>
<title>Foor</title>
<script>
function foor(){
    this.tuli="roheline";
    this.kysiTuli=function(){return this.tuli;}
    this.muudaTuli=function(uusTuli){this.tuli=uusTuli;}
}
function leheAlgus(){
    var f1=new foor();
    console.log(f1.kysiTuli());
    f1.muudaTuli("kollane");
    document.getElementById("vastus").innerHTML=
        f1.kysiTuli();
}
</script>
</head>
<body onload="leheAlgus()">
    <div id="vastus"></div>
    </body>
    </html>
