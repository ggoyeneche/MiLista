(function($app){
    $app.controller("MarketController", function($scope, ApiDB){
        var me = this;

        this.list = function(){
            ApiDB.Users.query({ userName: me.loginData.userName }).then(function(users){
                $scope.validateUser(users, function(result){
                    if (!result.isOk){
                        $("[name=" + result.control + "]").css("background-color", "#FEFEFE");
                    } else {
                        SessionService.create(result.user);
                        document.location.href = "index.html";
                    }
                });
            });
        }
    });
})(app);
