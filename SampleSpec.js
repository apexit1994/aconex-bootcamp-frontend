/*describe('Testing a QAP controller', function() {
    var $scope = null;
    var ctrl = null;
  
      beforeEach(module('qaPortal'));
  
    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
  
      ctrl = $controller('profilectrl', {
        $scope: $scope
      });
    }));


  
    it('should say username', function() {
      expect($scope.username).toEqual('Apexit');
    });
  });*/

  describe('Testing a QAP controller', function() {
  
    console.log("hello");
     var $controller;
      beforeEach(module('qaPortal'));
  
      beforeEach(inject(function(_$controller_) {
        $controller=_$controller_;
      }));

      describe('check',function(){
        var $scope ={};
        var controller= $controller('profilectrl',{$scope:$scope});

        it('should say questionanswered', function() {
          expect($scope.questionanswered).toBe(112);
        });
      });      
  });
/*
describe('Sample test', function() {
  it('Condition is true', function() {
    expect('AngularJS').toBe('AngularJS');
  });
});
*/

