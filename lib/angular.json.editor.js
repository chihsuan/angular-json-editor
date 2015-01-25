(function() {

  var jsonEditorController = require("./controllers/json.editor.controller");
  var app = angular.module('json-editor', ['ngRoute'])
                   .controller('jsonEditorController', jsonEditorController);
  require("./directives/json.editor.directive");
  
})();
