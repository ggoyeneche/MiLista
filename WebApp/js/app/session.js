(function($app){
    $app.factory('SessionService', function (ApiDB, md5) {
        return {
            create: function(user){
                var session = new ApiDB.Sessions();
                var dt = new Date();
                var timeStamp = dt.getTime();

                session.userName = user.userName;
                session.lastAccess = timeStamp;
                session.ip = "127.0.0.1";

                session.$saveOrUpdate();
            },
            isActive: function(ip){
                var result = ApiDB.Sessions.query({ip: ip});
                if (result.length == 0) {
                    return false;
                } else {
                    return true;
                }
            }
        };
    });
})(app);
