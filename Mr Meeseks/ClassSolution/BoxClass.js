var importMrMeeseks = require('./MrMeeseeks');

class MrMeesekBox {
    constructor() {
        if(MrMeesekBox.exists) {
            this._box = MrMeesekBox._box;
            return this._box;
        }
        this._box = new MrMeesekBox();
        this._box.reality = [];
        return this._box;
    }

    createMrMeeseks() {
        return mrmee = importMrMeeseks.singleMrMeeseks.get();
    }
}

var box = new MrMeesekBox();
box.createMrMeeseks();

