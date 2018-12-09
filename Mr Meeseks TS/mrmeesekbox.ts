import { MrMeeseks } from './mrmeeseks';

export class MrMeesekBox {
    private static instance: MrMeesekBox;

    private constructor() {
    }

    public getBox() {
        if(!MrMeesekBox.instance) {
            MrMeesekBox.instance = new MrMeesekBox();
        }

        return MrMeesekBox.instance;
    }

    public generateMrMeeseks() {
        return new MrMeeseks();
    }
}