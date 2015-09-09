(function($app){
    $app.controller("ShoppingListController", function($scope, $location, $route, ApiDB){
        this.goToIndex = function(){
            $location.path('/list');
        };

        this.new = function(){
            $location.path('/new');
        };

        this.goToIndex();
    });

    $app.controller("ShoppingListControllerCRUD", function($scope, $location, ApiDB){
        $scope.returnToList = function(){
            $location.path('/list');
        };

        $scope.create = function(shoppingList){

        };

        this.getAll = function(){
            jQuery.isLoading({text:"Cargando datos..."});
            ApiDB.ShoppingLists.all().then(function(shoppingLists){
                $scope.shoppingLists = shoppingLists;
                jQuery.isLoading("hide");
            });

        };

        switch ($location.path()){
            case "/list":
                this.getAll();
                break;
        }
    });

    $app.config(function($routeProvider){
        $routeProvider
            .when('/list', {
                templateUrl: 'templates/list.html',
                controller: 'ShoppingListControllerCRUD'
            })
            .when('/new', {
                templateUrl: 'templates/list_new.html',
                controller: 'ShoppingListControllerCRUD'
            });
    });
})(app);
