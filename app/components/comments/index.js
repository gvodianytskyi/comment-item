import {CommentsController} from './comments.controller';

export default {
    controller: CommentsController,
    controllerAs: "$ctrl",
    templateUrl: "components/comments/comments.html",
    bindings: {
        comments: "=",
        activeItemId: "=",
        onAddComment: "&"
    }
}