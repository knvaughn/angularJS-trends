app.controller('MainController', ['$scope', 'nyt', function($scope, nyt) {
    nyt.then(response => console.log(response))
}]);