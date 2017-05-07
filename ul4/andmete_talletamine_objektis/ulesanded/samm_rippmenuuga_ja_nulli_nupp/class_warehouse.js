class Warehouse {

    constructor(layerName, amount) {
        this.layer = document.getElementById(layerName);
        this.amount = amount;
        this.stepSize = 5;

        window[layerName + '_wh'] = this;

        this.layer.innerHTML =
            '<p>Samm<br>' +
            '<select id="' + layerName + '_step" onchange="' + layerName + '_wh.saveStep();">' +
            '<option value="5">5</option>' +
            '<option value="10">10</option>' +
            '<option value="15">15</option>' +
            '<option value="20">20</option>' +
            '</select><br />' +
            '<input type="button" value="&lt;" onClick="' + layerName + '_wh.decrease();" />' +
            '<input type="text" id="' + layerName + '_answer" style="width: 50px" disabled />' +
            '<input type="button" value="&gt;" onClick="' + layerName + '_wh.enlarge();" /><br>' +
            '<input type="button" value="nulli" onClick="' + layerName + '_wh.resetField();" />' +
            '</p>';

        this.answer = document.getElementById(layerName + "_answer");
        this.steps  = document.getElementById(layerName + "_step");
        this.show();
    }

    enlarge() {
        this.amount += this.stepSize;
        this.show();
    }

    decrease() {
        this.amount -= this.stepSize;
        this.show();
    }

    saveStep() {
        this.stepSize = parseInt(this.steps.value);
    }

    resetField() {
        this.amount = 0;
        this.show();
    }

    show() {
        this.answer.value = this.amount;
        this.step = this.stepSize;
    }
}