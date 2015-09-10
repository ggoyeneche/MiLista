(function ($app) {
    "use strict";
    $app.controller("ProductController", function ($scope, $location, $route, ApiDB) {
        this.goToIndex = function () {
            $location.path('/list');
        };

        this.newProduct = function () {
            $location.path('/new');
        };

        this.goToIndex();
    });

    $app.controller("ProductListController", function ($scope, $location, ApiDB) {
        $scope.returnToList = function () {
            $location.path('/list');
        };

        $scope.create = function (shoppingList) {

        };

        this.getAll = function () {
            jQuery.isLoading({text: "Cargando datos..."});
            ApiDB.Products.all().then(function (products) {
                $scope.products = products;
                jQuery.isLoading("hide");
            });

        };

        this.getAll();
    });

    $app.controller("ProductNewController", function ($scope, $location, ApiDB) {
        $scope.returnToList = function () {
            $location.path('/list');
        };

        $scope.create = function (product) {

        };

        this.initialize = function(){
        }

        this.initialize();
    });

    $app.config(function ($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'templates/product/index.html',
                controller: 'ProductListController'
            })
            .when('/new', {
                templateUrl: 'templates/product/new.html',
                controller: 'ProductNewController'
            });
    });
})(app);
