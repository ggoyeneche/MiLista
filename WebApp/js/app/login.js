(function($app){
    debugger;
    $app.factory('UsersDB', function ($mongolabResourceHttp) {
        return $mongolabResourceHttp('users');
    });

    $app.controller("LoginController", function($scope, UsersDB, md5){
        var me = this;

        $scope.validateUser = function(users, finish){
            if (users.length == 0){
                finish({isOk: false, message: "El usuario ingresado es inválido", control: "userName"});
            }

            if (users[0].userName == me.loginData.userName){
                if (users[0].password == md5.createHash(me.loginData.password)){
                    finish({isOk: true});
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
            UsersDB.query({ userName: me.loginData.userName }).then(function(users){
                $scope.validateUser(users, function(result){
                    if (!result.isOk){
                        $("[name=" + result.control + "]").css("background-color", "#FEFEFE");
                    }
                });
            });
        }
    });
})(app);
