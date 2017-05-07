class Light {

    constructor(layerName) {

        this.lightState = true;
        this.layer = document.getElementById(layerName);

        window[layerName + '_light'] = this;

        this.layer.innerHTML =
            '<div id="' + layerName + '_answer" ></div>' +
            '<input type="button" value="ON/OFF" onClick="' + layerName + '_light.changeState();" /> ';

        this.answer = document.getElementById(layerName + "_answer");
        this.show('on');
    }

    changeState() {
        if (this.lightState) {
            this.lightState = false;
            this.show('off');
        } else {
            this.lightState = true;
            this.show('on');
        }
    }

    show(newState) {
        this.answer.innerHTML = '<span class="light ' + newState + '">' + this.lightState + '</span>';
    }
}
