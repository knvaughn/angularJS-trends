app.factory('nyt', ['$http', function($http) {
    return $http.get(nytApi.url, {params: {'api-key': nytApi.key}})
        .then(function(response){
            return response.data.results;
        }, function(error){
            console.log(error);
        });
}])