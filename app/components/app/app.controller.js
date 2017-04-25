export class AppController {

    constructor(itemsSrv, commentsSrv) {
        this.itemsSrv = itemsSrv;
        this.commentsSrv = commentsSrv;
        this.items = this.itemsSrv.getData();
        this.activeItemId = this.items[0] ? this.items[0].id : null;
        this.comments = this.activeItemId > 0 ? this.commentsSrv.getComments(this.activeItemId) : null;
    }

    addComment(event, comment) {
        let itemId = this.getActiveItemId();
        if (event.which !== 13) {
            return;
        }
        if (comment) {
            this.commentsSrv.add(comment, itemId);
            this.comments = this.getComments(this.getActiveItemId());
            this.comment = '';
        }
        event.preventDefault();
    }

    addItem(item) {
        let newItemId = this.itemsSrv.add(item);
        this.items = this.itemsSrv.getData();
        this.activeItemId = newItemId;
        this.comments = this.commentsSrv.getComments(this.activeItemId);
    }
    
    removeItem(item) {
        this.itemsSrv.remove(item.id);
        if (item.id === this.activeItemId) {
            this.comments = null;
            this.activeItemId = null;
        }
        this.items = this.itemsSrv.getData();
    }

    activateItem(item) {
        this.activeItemId = item.id;
        this.comments = this.commentsSrv.getComments(this.activeItemId);
    }

    addComment(comment) {
        this.commentsSrv.add(comment, this.activeItemId);
        this.comments = this.commentsSrv.getComments(this.activeItemId);
    }
}