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
   
   	$scope.items = [];

    // add an item
    $scope.add = function() {
    	
    		$scope.items.push($scope.item);
    		$scope.item="";
    };

    $scope.postdata =function()
    {
        $scope.debug = "Fetching...";    
        $scope.json= "";
        $scope.message = "";
        var baseUrl="http://10.191.238.168:9090/questions"; 

        var request = {
            questionId:0, 
            question: "this is new"
        };

        $http.post(baseUrl, JSON.stringify(request) ,{
            status:200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Origin':true
            },
            body: {
                ok: true
            }
        });
    };

    console.log($scope.ques);
    console.log($scope.items);

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
    // initial items
    
})


.controller('datactrl',
        function ($scope, $http) {
        	
                    console.log("done");

            var request = {
                method: 'get',
                url: 'http://10.191.238.168:9090/questions',
                dataType: 'json',
                contentType: "application/json"
            };

            $scope.arrBirds = new Array;

            $http(request)
                .success(function (jsonData) {

                    console.log("in success");
                    $scope.arrBirds = jsonData;
                    $scope.list = $scope.arrBirds;
                    console.log($scope.list);
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