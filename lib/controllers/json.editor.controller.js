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

    function initialize(id, options) {
      vm.editor = new JSONEditor(document.getElementById('json_editor'), options);
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

    function onchange(cb) {
      vm.editor.on("change",  function() {
        cb();
      });  
    }

    function destroy() {
      vm.editor.destroy();
    }
  }
})();
