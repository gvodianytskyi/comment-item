export default class ItemsService {
    constructor(utilsSrv) {
        this.utilsSrv = utilsSrv;
    }

    getData() {
        return angular.fromJson(localStorage.getItem('comment-item_items')) || [];
    }

    setData(data) {
        localStorage.setItem('comment-item_items', angular.toJson(data));
    }

    add(item) {
        let items = this.getData();
        let newId = this.utilsSrv.generateNextId(items.map(item => item.id));
        items.push({
            id: newId,
            name: item.name
        });
        this.setData(items);
        return newId;
    }

    remove(id) {
        let items = this.getData();
        this.utilsSrv.removeItemById(items, id);
        this.setData(items);
    }

    static createInstance(utilsSrv) {
        if (!ItemsService.instance) {
            ItemsService.instance = new ItemsService(utilsSrv);
        }
        return ItemsService.instance;
    }
}