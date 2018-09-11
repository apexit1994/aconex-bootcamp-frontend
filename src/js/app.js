var baseurl="http://10.191.198.64:8080/questions";

angular.module('qaPortal',['ngRoute','ngResource'])

.config(function($routeProvider){

	$routeProvider

	.when('/',{
		templateUrl: 'src/html/postQues.html',
		controller: 'postQuesController'
	})
    
    .when('/postedQues',{
		templateUrl: 'src/html/postedQues.html',
		controller: 'postedQuesController'
	})
    
    .when('/postQues',{
		templateUrl: 'src/html/postQues.html',
		controller: 'postQuesController'
	})

	.when('/home',{
		templateUrl:'src/html/home.html'
	})

	.when('/profile',{
		templateUrl:'src/html/profile.html',
		controller: 'profilectrl'
	})

	.when('/queans',{
		templateUrl:'src/html/queans.html'
	})

})

.service('questionService',function(){
	this.ques="";
})

.controller('postQuesController',['$scope','questionService', "$http" ,function($scope,questionService,$http){

	$scope.ques = questionService.ques;
    $scope.loadStatus="data retrived";
   	$scope.items = [];

    // add an item
    $scope.add = function() {
    	
    		$scope.items.push($scope.item);
    		$scope.item="";
    };

    $scope.postdata =function()
    {

        var senddata = JSON.stringify({
            questionId:0, 
            question: $scope.ques
        });

        $http({
            method: 'POST',
            url: baseurl,
            data: senddata,
            headers: {'Content-Type': 'application/json'}
        });
    }

}])

.controller('postedQuesController',['$scope','questionService' ,function($scope,questionService){

	$scope.ques = questionService.ques;
    $scope.items = questionService.items;
    console.log($scope.ques);
    console.log($scope.items);

}])

.controller('profilectrl', function($scope) {
    // initial items
   	$scope.username='Apexit';
   	$scope.emailid='apexit1994@gmail.com';
   	$scope.password='newpassword';
   	$scope.questionasked=26;
   	$scope.questionanswered=112;
})

.controller('homectrl', function($scope) {
    // initial item
})


.controller('datactrl',
        function ($scope, $http) {
        	
            $scope.loadStatus='data loaded';

            var request = {
                method: 'get',
                url: baseurl,
                dataType: 'json',
                contentType: "application/json"
            };

            $scope.arrdata = new Array;
            $http(request)
                .success(function (jsonData) {
                    $scope.arrdata = jsonData;
                    $scope.list = $scope.arrdata;
                })
                .error(function () {
                    console.log("not able to fetch data");
                });
        })

.controller('queansctrl', function($scope) {
        $scope.votes=23;
        $scope.answers=43;
        $scope.askedby='Apexit';
})