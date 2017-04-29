class Calculator {

    constructor(layerName, boxText, buttonText, coefficient) {
        this.layer = document.getElementById(layerName);

        window[layerName + '_calc'] = this;

        this.layer.innerHTML =
            boxText+': <input type="text" id="' + layerName + '_box" /> ' +
            '<input type="button" value="' + buttonText + '" ' +
            'onClick="' + layerName + '_calc.calculate();" /> ' +
            '<div id="' + layerName + '_answer"></div>';

        this.box         = document.getElementById(layerName + '_box');
        this.answer      = document.getElementById(layerName + '_answer');
        this.coefficient = coefficient;
    }

    calculate() {
        this.answer.innerHTML = parseFloat(this.box.value) - parseFloat(this.box.value) / this.coefficient;
    }
}