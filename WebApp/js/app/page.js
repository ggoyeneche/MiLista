(function($app){
    $app.controller("PageController", function($scope, SessionService){
        var me = this;
        $scope.pageData = {
            helpLink: 'Ayuda'
        };

        this.validateSession = function(){
            debugger;
            if (!SessionService.isActive("127.0.0.1")) {
                document.location.href = "login.html";
            }
        }

        this.validateSession();
    }).directive("pageMenu", function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/page-menu.html'
        };
    });
})(app);
