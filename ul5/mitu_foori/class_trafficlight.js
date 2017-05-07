class TrafficLight {

    constructor(light) {
        this.light = light;
        this.showLight = function() { return this.light; };
        this.changeLight = function(newLight) { this.light = newLight; };
    }

}
