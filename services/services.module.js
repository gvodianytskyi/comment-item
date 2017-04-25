import ItemsService from './items.service';
import UtilsService from './utils.service';
import CommentsService from './comments.service';

export let services = angular.module('services', [])
    .factory('utilsSrv', UtilsService.createInstance)
    .factory('commentsSrv', CommentsService.createInstance)
    .factory('itemsSrv', ItemsService.createInstance);