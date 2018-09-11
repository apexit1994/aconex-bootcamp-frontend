describe('datactrl', function() {

    beforeEach(module('qaPortal'));

    it('initialises scopes', 
      inject(function($controller, $rootScope) {
          var scope = $rootScope.$new();
          var datactrl = $controller('datactrl', {
              $scope: scope
            });
          expect(scope.loadStatus).toBe('data loaded');
    }));

    it('initialises scopes', 
    inject(function($controller, $rootScope) {
        var scope = $rootScope.$new();
        var datactrl = $controller('postQuesController', {
            $scope: scope
          });
        expect(scope.loadStatus).toBe('data retrived');
    }));



});