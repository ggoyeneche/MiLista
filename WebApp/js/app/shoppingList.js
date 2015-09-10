(function ($app) {
    "use strict";
    $app.controller("ShoppingListController", function ($scope, $location, $route, ApiDB) {
        this.goToIndex = function () {
            $location.path('/list');
        };

        this.newList = function () {
            $location.path('/new');
        };

        this.goToIndex();
    });

    $app.controller("ShoppingListControllerList", function ($scope, $location, ApiDB) {
        $scope.returnToList = function () {
            $location.path('/list');
        };

        $scope.create = function (shoppingList) {

        };

        this.getAll = function () {
            jQuery.isLoading({text: "Cargando datos..."});
            ApiDB.ShoppingLists.all().then(function (shoppingLists) {
                $scope.shoppingLists = shoppingLists;
                jQuery.isLoading("hide");
            });

        };

        this.getAll();
    });

    $app.controller("ShoppingListControllerNew", function ($scope, $location, ApiDB) {
        $scope.returnToList = function () {
            $location.path('/list');
        };

        $scope.create = function (shoppingList) {

        };

        this.initialize = function(){
            $.isLoading({text: "Inicializando..."});

            setTimeout(function(){
                var now = new Date();

                $('#datetimepicker1').datetimepicker({
                    defaultDate: now,
                    format: "DD/MM/YYYY"
                });

                //$.get('example_collection.json', function(data){
                    $("#exampleInputPassword3").typeahead();
                //},'json');

                $.isLoading("hide");
            }, 100);
        }

        this.initialize();
    });

    $app.config(function ($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'templates/list/index.html',
                controller: 'ShoppingListControllerList'
            })
            .when('/new', {
                templateUrl: 'templates/list/new.html',
                controller: 'ShoppingListControllerNew'
            });
    });
})(app);
