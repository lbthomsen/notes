/*
 * About Route
 */
(function() {

    var module = angular.module("about-route", []);

    module.config(["$routeProvider", 
        function($routeProvider) {
            $routeProvider
                .when("/about", {
                    templateUrl: "views/about.html"
                });
        }
    ]);

})();
/*
 * vim: ts=4 et nowrap autoindent
 */
