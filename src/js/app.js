var qaPortal = angular.module('qaPortal',[]);

qaPortal.config(function($routeProvider){

	$routeProvider
	

	.when('/',{
		templateUrl: 'page/postQues.html',
		controller: 'postQuesController'
	})
    
    .when('/postedQues',{
		templateUrl: 'page/postedQues.html',
		controller: 'postedQuesController'
	})
    
    .when('/postQues',{
		templateUrl: 'page/postQues.html',
		controller: 'postQuesController'
	})

	.when('/home',{
		templateUrl:'home/home.html'
	})

	.when('/profile',{
		templateUrl:'profile/profile.html',
		controller: 'profilectrl'
	})

	.when('/queans',{
		templateUrl:'QuestionAnswer/queans.html'
	})

});

qaPortal.service('questionService',function(){
	this.ques="";
});

qaPortal.controller('postQuesController',['$scope','questionService' ,function($scope,questionService){

	$scope.ques = questionService.ques;
   
   	$scope.items = [];

    // add an item
    $scope.add = function() {
    	
    		$scope.items.push($scope.item);
    		$scope.item="";
    };
    $scope.$watch('ques',function(){
        questionService.ques = $scope.ques;
	});
    $scope.$watch('items',function(){
        questionService.items = $scope.items;
	});

    console.log($scope.ques);
    console.log($scope.items);

}]);

qaPortal.controller('postedQuesController',['$scope','questionService' ,function($scope,questionService){

	$scope.ques = questionService.ques;
    $scope.items = questionService.items;
    console.log($scope.ques);
    console.log($scope.items);

}]);

qaPortal.controller('profilectrl', function($scope) {
    // initial items
   	$scope.username='Apexit';
   	$scope.emailid='apexit1994@gmail.com';
   	$scope.password='newpassword';
   	$scope.questionasked=26;
   	$scope.questionanswered=112;
    
});

qaPortal.controller('homectrl', function($scope) {
    // initial items
    
});


qaPortal.controller('datactrl',
        function ($scope, $http) {
        	
                    console.log("done");

            var request = {
                method: 'get',
                url: 'http://10.191.245.102:8080/questions',
                dataType: 'json',
                contentType: "application/json"
            };

            $scope.arrBirds = new Array;

            $http(request)
                .success(function (jsonData) {

                    console.log("in success");
                    $scope.arrBirds = jsonData;
                    $scope.list = $scope.arrBirds;
                })
                .error(function () {

                });
        });

qaPortal.controller('queansctrl', function($scope) {
        $scope.votes=23;
        $scope.answers=43;
        $scope.askedby='Apexit';
});
