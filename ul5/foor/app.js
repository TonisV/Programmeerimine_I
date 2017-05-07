function createTrafficLights() {

    var trLight = new TrafficLight('green');

    console.log(trLight.showLight());
    trLight.changeLight('yellow');
    document.getElementById("answer").innerHTML = trLight.showLight();
}