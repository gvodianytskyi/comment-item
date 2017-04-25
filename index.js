import * as angular from 'angular';
import './components/components.module';
import './services/services.module';

angular.module('app', ['components', 'services']);
angular.element(document).ready(() => {
    angular.bootstrap(document, ["app"]);
});