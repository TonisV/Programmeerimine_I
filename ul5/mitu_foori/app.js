function createTrafficLights() {

    var trLight1 = new TrafficLight('green');
    var trLight2 = new TrafficLight('red');

    console.log(trLight1.showLight(), ' ', trLight2.showLight());
    trLight1.changeLight('yellow');
    trLight2.changeLight('green');
    document.getElementById("answer").innerHTML = trLight1.showLight() + ' ' + trLight2.showLight();
}