class Rectangle {

    constructor(layerName, amount) {

        this.layer = document.getElementById(layerName);
        this.amount = amount;
        this.step   = 1;

        window[layerName + '_wh'] = this;

        this.layer.innerHTML =
            '<canvas id="' + layerName + '_canvas" ' +
            'width="200" height="150" '+
            'style="background-color: yellow" ></canvas><br />' +
            'Samm <br />' +
            '<input type="number" id="' + layerName + '_step" onchange="' + layerName + '_wh.saveStep();"><br />' +
            '<input type="button" value="&lt;" onClick="' + layerName + '_wh.decrease();" />' +
            '<input type="text" id="' + layerName + '_answer" style="width: 50px" disabled />' +
            '<input type="button" value="&gt;" onClick="' + layerName + '_wh.enlarge();" /><br>' +
            '</p>';

        this.answer  = document.getElementById(layerName + '_answer');
        this.steps   = document.getElementById(layerName + '_step');
        this.canvas  = document.getElementById(layerName + '_canvas');
        this.context = this.canvas.getContext("2d");
        this.show();

    }

    enlarge() {
        this.amount += this.step;
        this.show();
    }

    decrease() {
        this.amount -= this.step;
        this.show();
    }

    saveStep() {
        this.step = parseInt(this.steps.value);
    }

    show() {
        this.answer.value = this.amount;
        this.context.clearRect(0, 0, 200, 150);
        this.context.fillRect(10, 10, this.amount, 20);
    }
}