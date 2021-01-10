require('nytApi');
app.factory('nyt', ['$http', function($http) {
    return $http.get(nytUrl + `?api-key=${nytApi}`)
        .success(function(data){
            return data;
        })
        .error(function(err) {
            return err;
        })
}])