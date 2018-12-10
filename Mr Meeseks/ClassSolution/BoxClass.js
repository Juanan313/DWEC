var importMrMeeseks = require('./MrMeeseeks');

class MrMeesekBox {
    constructor() {
        if(MrMeesekBox.exists) {
            this._box = MrMeesekBox._box;
            return this._box;
        }
        this._box = new MrMeesekBox();
        this._box.reality = [];
        this._box.createMrMeeseks = function () {
            this._mrmee = importMrMeeseks.singleMrMeeseks.get();
          }
        return this._box;
    }
}

var box = new MrMeesekBox();
box.createMrMeeseks();

