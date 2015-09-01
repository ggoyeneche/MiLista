(function($app){
    $app.controller("LoginController", function($scope, SessionService, ApiDB, md5){
        var me = this;

        $scope.validateUser = function(users, finish){
            if (users.length == 0){
                finish({isOk: false, message: "El usuario ingresado es inválido", control: "userName"});
            }

            if (users[0].userName == me.loginData.userName){
                if (users[0].password == md5.createHash(me.loginData.password)){
                    finish({isOk: true, user: users[0]});
                } else {
                    finish({isOk: false, message: "La clave ingresada es inválida", control: "password"});
                }
            } else {
                finish({isOk: false, message: "El usuario ingresado es inválido", control: "userName"});
            }
        }

        me.loginData = {
            userName: "",
            password: "",
            rememberMe: false
        };

        this.login = function(){
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
