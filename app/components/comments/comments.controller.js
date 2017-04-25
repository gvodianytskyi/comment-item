export class CommentsController {

    constructor() {}

    add(event, comment) {
        if (event.which !== 13) {
            return;
        }
        if (comment) {
            this.onAddComment({comment: comment});
            this.comment = '';
        }
        event.preventDefault();
    }
}