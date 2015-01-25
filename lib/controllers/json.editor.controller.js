(function(){
  
  require('jsoneditor');
  module.exports = jsonEditorController;

  function jsonEditorController($scope) {
  
    var vm = this;
    vm.initialize = initialize;
    vm.setValue = setValue;
    vm.getValue = getValue;
    vm.validate = validate;
    vm.onchange = onchange;
  
    initialize($scope.options.id, $scope.options);
    setValue($scope.data);
    vm.onchange();

    function initialize(id, options) {
      vm.editor = new JSONEditor(document.getElementById(id), options);
      window.editor = vm.editor;
    }

    function setValue(value) {
      vm.editor.setValue(value);
    }

    function getValue() {
      return vm.editor.getValue();
    }

    function validate(cb) {
      var errors = vm.editor.validate();
      if(errors.length) {
        console.err('invalid');
        cb();
      }
    }

    function onchange() {
      vm.editor.on("change",  function() {
        $scope.data = vm.getValue();
        console.log($scope.data);
      });  
    }

    function destroy() {
      vm.editor.destroy();
    }
  }
})();
