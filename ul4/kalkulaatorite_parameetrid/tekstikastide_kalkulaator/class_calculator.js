class Calculator {

    constructor(layerName, boxText, buttonText, boxNumber) {

        this.layer = document.getElementById(layerName);
        this.boxesTotal = boxNumber;

        window[layerName + '_calc'] = this;

        this.layer.innerHTML =
            boxText + '<br />' + this.makeBoxes() +
            '<input type="button" value="' + buttonText + '" ' +
            'onClick="' + layerName + '_calc.calculate();" /> ' +
            '<div id="' + layerName + '_answer"></div>';

        this.boxesAll  = document.getElementsByName('boxes');
        this.answer    = document.getElementById(layerName + '_answer');
    }

    makeBoxes() {
        var boxes = '';
        for(var i = 0; i < this.boxesTotal; i++) {
            boxes += '<input type="number" value="0" name="boxes" id="box_' + i + '" /><br />';
        }
        return boxes;
    }

    sumBoxValues() {
        var boxesSum = 0;

        for(var a = 0; a < this.boxesAll.length; a++) {
            boxesSum += parseFloat(this.boxesAll[a].value);
        }

        return boxesSum;
    }

    calculate() {
        this.answer.innerHTML = this.sumBoxValues() / this.boxesAll.length;
    }
}