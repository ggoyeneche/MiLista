(function($app){
    $app.controller("PageController", function($scope, SessionService){
        var me = this;
        $scope.pageData = {
            helpLink: 'Ayuda',
            templates: {
                menu: "templates/page-menu.html"
            }
        };

        this.openPage = function(url){
            $location.path(url);
        }

        this.validateSession = function(){
            debugger;
            if (!SessionService.isActive("127.0.0.1")) {
                document.location.href = "login.html";
            }
        }

        this.validateSession();
    });
})(app);
