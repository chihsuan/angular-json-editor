(function(){
  
  require('jsoneditor');
  module.exports = jsonEditorController;

  function jsonEditorController($scope) {

    var vm = this;
    vm.setOptions = setOptions;
    vm.initialize = initialize;
    vm.setValue = setValue;
    vm.getValue = getValue;
    vm.validate = validate;
    vm.onchange = onchange;
  
    setOptions($scope.options);
    initialize($scope.options.id, $scope.schema);
    setValue($scope.data);

    function setOptions(options) {
      JSONEditor.defaults.options.theme = options.theme || 'foundation4';
    }

    function initialize(id, schema) {
      vm.editor = new JSONEditor(document.getElementById('json_editor'),{
       schema: schema
      });
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
