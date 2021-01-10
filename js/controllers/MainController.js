app.controller('MainController', ['$scope', 'nyt', function($scope, nyt) {
    nyt.then((response) => {
        $scope.list = response.map((obj) => {
            return {title: obj.title, abstract: obj.abstract, url: obj.url};
        })
    });
}]);