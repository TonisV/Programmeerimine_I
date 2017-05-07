class Calculator {

    constructor(layerName) {
        this.layer = document.getElementById(layerName);

        window[layerName + "_calc"] = this;

        this.layer.innerHTML =
            "Raadius: <input type='text' id='" + layerName + "_box' /> " +
            "<input type='button' value='Arvuta pindala' " +
            "onClick='" + layerName + "_calc.calculate();' /> " +
            "<div id='" + layerName + "_answer'></div>";

        this.box    = document.getElementById(layerName + "_box");
        this.answer = document.getElementById(layerName + "_answer");
    }

    calculate() {
        this.answer.innerHTML = Math.PI * Math.pow(parseFloat(this.box.value), 2) + ' m2';
    }
}