var $app = $app || {};

$app.controllers = {};

(function ($app, $) { 
    $app.registerController = function(controllerName, definition){
        $app.controllers[controllerName] = definition;
    };
    
    $app.init = function() {
        $(document).ready(function(){
            var controller = $("body").attr("controller");
            if (typeof ($app.controllers[controller]) != 'undefined'){
                if ($.isFunction($app.controllers[controller].init)){
                    $app.controllers[controller].init();
                }
            }
            
        });
    };
})($app, jQuery);

$app.init();

function APP(){
    var controllers = {};
    
    this.registerController = function(){
    }
}