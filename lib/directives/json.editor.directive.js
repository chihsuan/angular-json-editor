(function(){
  'use strict';

  module.export = require('angular')
                  .module('json-editor')
                  .directive('jsonEditor', jsonEditorDirective);

  var jsonEditorController = require('../controllers/json.editor.controller');

  function jsonEditorDirective() {
    var directive = {
        require: '?ngModel',
        restrict: 'E',
        scope: {
          ngModAel: '=',
          data: '=',
          options: '=',
          schema: '='
        },
        controller: jsonEditorController,
        controllerAs: 'editor'
    };
    return directive;
 }

})();
