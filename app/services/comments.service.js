export default class CommentsService {
    constructor(utilsSrv, itemsSrv) {
        this.utilsSrv = utilsSrv;
        this.itemsSrv = itemsSrv;
    }

    add(commentText, itemId) {
        let items = this.itemsSrv.getData();
        let index = items.findIndex(x => Number(x.id) === Number(itemId));
        if (!items[index].comments) {
            items[index].comments = [];
        }
        items[index].comments.push({
            id: this.utilsSrv.generateNextId(items[index].comments.map(comment => comment.id)),
            comment: commentText
        });
        this.itemsSrv.setData(items);
    }

    getComments(itemId) {
        let items = this.itemsSrv.getData();
        return items.find(item => item.id === itemId).comments;
    }

    static createInstance(utilsSrv, itemsSrv) {
        if (!CommentsService.instance) {
            CommentsService.instance = new CommentsService(utilsSrv, itemsSrv);
        }
        return CommentsService.instance;
    }
}