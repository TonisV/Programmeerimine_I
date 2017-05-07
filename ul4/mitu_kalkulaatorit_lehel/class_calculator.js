class Calculator {

    constructor(layerName) {
        this.layer = document.getElementById(layerName);

        window[layerName + "_calc"] = this;

        this.layer.innerHTML =
            "Tollid: <input type='text' id='" + layerName + "_box' /> " +
            "<input type='button' value='Sentimeetriteks' " +
            "onClick='" + layerName + "_calc.calculate();' /> " +
            "<div id='" + layerName + "_answer'></div>";

        this.box    = document.getElementById(layerName + "_box");
        this.answer = document.getElementById(layerName + "_answer");
    }

    calculate() {
        this.answer.innerHTML = parseFloat(this.box.value) * 2.54;
    }
}