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
    }

    function setValue(value) {
      vm.editor.setValue(value);
    }

    function getValue() {
      return editor.getValue();
    }

    function validate(cb) {
      var errors = editor.validate();
      if(errors.length) {
        console.err('invalid');
        cb();
      }
    }

    function onchange(cb) {
      editor.on("change",  function() {
        cb();
      });  
    }
  }
})();
