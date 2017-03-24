export class User {
    id: number;
    username: string;
    password: string;
    selected: boolean;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
