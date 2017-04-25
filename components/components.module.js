import app from './app';
import items from './items';
import comments from './comments';

export let components = angular.module('components', [])
    .component('app', app)
    .component('items', items)
    .component('comments', comments);
