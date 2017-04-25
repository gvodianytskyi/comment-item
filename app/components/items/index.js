import {ItemsController} from './items.controller';

export default {
    controller: ItemsController,
    controllerAs: "$ctrl",
    templateUrl: "components/items/items.html",
    bindings: {
        items: "=",
        activeItemId: "=",
        onAddItem: "&",
        onRemoveItem: "&",
        onActivateItem: "&"
    }
}