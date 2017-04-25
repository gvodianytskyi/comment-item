export default class UtilsService {
    constructor() {}

    generateNextId(array) {
        return array.length > 0 ? Math.max.apply(null, array) + 1 : 1;
    }

    removeItemById(array, id) {
        let index = array.indexOf(array.find(item => Number(item.id) === Number(id)));
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    static createInstance() {
        if (!UtilsService.instance) {
            UtilsService.instance = new UtilsService();
        }
        return UtilsService.instance;
    }
}
