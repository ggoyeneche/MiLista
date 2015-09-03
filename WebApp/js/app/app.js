var app = angular.module("milista", ['mongolabResourceHttp', 'angular-md5', 'ngRoute']);

app.constant('MONGOLAB_CONFIG',
{
    API_KEY:'_fPfsN3vBy1dlU14GSOtQDrmx-rJCWWT',
    DB_NAME:'precios'
});

(function($app){
    $app.factory('ApiDB', function ($mongolabResourceHttp) {
        return {
            Users: $mongolabResourceHttp('users'),
            Sessions: $mongolabResourceHttp('sessions'),
            ShoppingLists: $mongolabResourceHttp('shoppingLists')
        }
    });
})(app);
