(function($app){
    $app.controller("ShoppingListController", function($scope, $location, ApiDB){
        this.goToIndex = function(){
            $location.path('/list');
        };

        this.new = function(){
            $location.path('/new');
        };

        this.goToIndex();
    });

    $app.controller("ShoppingListControllerCRUD", function($scope, $location, ApiDB){
    });

    $app.config(function($routeProvider){
        $routeProvider
            .when('/list', {
                templateUrl: 'templates/list.html',
                controller: 'ShoppingListControllerCRUD',
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
                controller: 'ShoppingListControllerCRUD'
            });
    });
})(app);
