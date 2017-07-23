import { IPointless } from '../module/Module';
import {Utils} from "../utils/utils"
import {ModuleA} from "../module/module"

class App implements IPointless {
    label: "nothing"
    someString: any
    innerModule: any
    constructor(mod) {
        this.innerModule = mod
    }
    getString(x) {
        this.someString = x
    }
}

let app = new App(new ModuleA(1));
Utils.safeJsonStringify({})

app.getString(Utils.safeJsonStringify({}))
window['app'] = app;

