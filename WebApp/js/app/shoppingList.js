(function($app){
    debugger;
    $app.controller("ShoppingListController", function($scope, ApiDB){
        debugger;
        this.goToIndex = function(){
            //$location.path('/list');
        };

        this.new = function(){
            //$location.path('/list_new');
        };
    });

    /*$app.config(function($routeProvider){
        $routeProvider
            .when('/list', {
                templateUrl: 'templates/list.html',
                controller: 'ShoppingListController',
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })
            .when('/new', {
                templateUrl: 'templates/list_new.html',
                controller: 'ShoppingListController'
            });
    });*/
})(app);
