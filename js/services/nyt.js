app.factory('nyt', ['$http', function($http) {
    return $http.get(nytApi.url, {params: {'api-key': nytApi.key}})
        .then(function(response){
            console.log(response.data.results);
            return response.data.results;
        }, function(error){
            console.log(error);
        });
}])