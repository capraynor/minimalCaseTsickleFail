export class ModuleA {
    justProp: string

    constructor(i: number) {
        this.justProp = i+"!"
    }

    doWork(): void {
        console.log("i am working here")
    }
}

export declare interface IPointless {
    label: string;
}