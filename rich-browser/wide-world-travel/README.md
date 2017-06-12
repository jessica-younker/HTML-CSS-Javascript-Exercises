You are going to use ngRoute to load the HTML for diplaying 
guide books from a partial into index.html

xMake a new branch called guide-routing

xInclude the separate angular-route provider into 
index.html: <script src="my-path-to-angular-route.min.js"></script>

xInject it into your app as a dependency: var myApp = angular.module("MyAppName", ['ngRoute']);

xSetup routing in app.js using the config method: app.config(['$routeProvider'....etc

xRemember to remove ng-controller references from index.html. 
Angular-route will now handle binding controllers to partials.