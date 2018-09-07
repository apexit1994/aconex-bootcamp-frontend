  describe('datactrl', function() {

    beforeEach(module('qaPortal'));
  /*
    it('initialises scope', 
        inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();
            var profilectrl = $controller('profilectrl', {$scope: scope});
            expect(scope.username).toBe("Apexit");
    }));
    it('initialises scopes', 
        inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();
            var profilectrl = $controller('profilectrl', {$scope: scope});
            expect(scope.password).toBe("newpassword");
    }));
    */
    it('initialises scopes', 
    inject(function($controller, $rootScope) {
        var scope = $rootScope.$new();
        var datactrl = $controller('datactrl', {$scope: scope});
        expect(scope.loadStatus).toBe('data loaded');
}));
  });