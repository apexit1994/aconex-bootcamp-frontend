describe('Testing a QAP controller', function() {
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
  });

/*
describe('Sample test', function() {
  it('Condition is true', function() {
    expect('AngularJS').toBe('AngularJS');
  });
});
*/

