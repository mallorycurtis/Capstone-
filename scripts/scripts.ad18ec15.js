"use strict";angular.module("capstoneApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("capstoneApp").controller("MainCtrl",["$scope","flickr","soundcloud",function(a,b,c){a.fetchData=function(){a.soundcloud=c.query({username:a.bandname}),a.flickr=b.query({user_id:a.bandname})}}]),angular.module("capstoneApp").factory("soundcloud",["$resource",function(a){return a("http://api.soundcloud.com/tracks/client_id=d12653efcff146eb581f2df668863c19",{},{query:{method:"GET",params:{username:"Eagles",bogus:null},isArray:!1}})}]),angular.module("capstoneApp").factory("flickr",["$resource",function(a){return a("https://api.flickr.com/services/rest/?method=flickr.tags.getClusterPhotos&api_key=43cae9827f976a2192f6b8dd2d0ec959&format=json&nojsoncallback=1",{},{query:{method:"GET",params:{api_key:"43cae9827f976a2192f6b8dd2d0ec959",user_id:""}}})}]),angular.module("capstoneApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="container" ng-controller="MainCtrl"> <div class="module"> <div style="text-align:center"> <h1>Find a band</h1> <div class="lead"> <p><label for="bandname"> <input type="text" name="bandname" ng-model="bandname" placeholder="Band Name"> </label> </p> </div> <div> <p><button type="button" class="btn btn-lg btn-primary styledbutton" ng-click="fetchData()">Get Band Info</button></p> <div class="results"> <span ng-if="clicked" class="animate-if"> <h2 class="resultsTitle">Search for: </h2> </span> </div> </div> </div> </div> <div class="module"> <div class="jumbotron"> <h1>Music</h1> <p class="lead"> <div ng-init=""> <dl> <dt>Info</dt> <dd>{{current.user}}</dd> <dd>{{current.uri}}</dd> <dt>Artwork</dt> <dd>{{current.artwork_url}}</dd> <dt>Genre</dt> <dd>{{current.genre}}</dd> <dt>Track Info</dt> <dd>{{current.release_year}}</dd> <dd>{{current.streamable}}</dd> </dl> </div> </p> </div> </div> <div class="module"> <div class="jumbotron"> <h1>Flikr Photos</h1> <p class="lead"> <div ng-init=""> <dl> <dt>Info</dt> <dd>{{user_id}}</dd> </dl> </div> </p> </div> </div> </div>')}]);