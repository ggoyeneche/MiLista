(function($app){
    $app.controller("PageController", function($scope, SessionService){
        var me = this;

        this.validateSession = function(){
            if (!SessionService.isActive("127.0.0.1")) {
                document.location.href = "login.html";
            }
        }

        this.validateSession();
    });
})(app);
