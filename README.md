# angular-json-editor

json editor with angular.

This directive make you easier to work with [json-editor] (https://github.com/jdorn/json-editor)

## Usage

get js from `./lib/dist/angular.json.editor.js`

```javascript
angular.module('myApp', ['amass'])
        .controller('myCtrl', function('$scope'){
           $scope.options = { /* JSON data */ };
           $scope.data = { /* JSON data or API */ };
           $scope.schema = { /*JSON data*/};
        })
```
and in html again you can use it like:

```html
<div ng-app='myApp'>
    <div ng-controller='myCtrl'>
        <json-editor id="json_editor" options='options' data='data' schema='schema'></json-editor>
    </div>
</div>
```
## License

MIT

