export class ItemsController {
    
    constructor(itemsSrv, commentsSrv) {
        // this.itemsSrv = itemsSrv;
        this.commentsSrv = commentsSrv;
        this.newItem = {};
    }

    add(item) {
        this.onAddItem({item: item});
        this.newItem = {};
    }

    remove(item) {
        this.onRemoveItem({item: item});
    }

    getComments(id) {
        return this.commentsSrv.getComments(id);
    }

    activate(item) {
        this.onActivateItem({item: item});
    }
}