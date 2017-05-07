class Warehouse {

    constructor(layerName, amount) {
        this.layer = document.getElementById(layerName);
        this.amount = amount;

        window[layerName + '_wh'] = this;

        this.layer.innerHTML =
            '<input type="button" value="&lt;" onClick="' + layerName + '_wh.decrease();" /> ' +
            '<input type="text" id="' + layerName + '_answer" style="width: 50px" disabled />' +
            '<input type="button" value="&gt;" onClick="' + layerName + '_wh.enlarge();" /> ';

        this.answer = document.getElementById(layerName + "_answer");
        this.show();
    }

    enlarge() {
        this.amount++;
        this.show();
    }

    decrease() {
        this.amount--;
        this.show();
    }

    show() {
        this.answer.value = this.amount;
    }
}