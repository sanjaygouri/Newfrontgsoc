
describe('postController', function() {
	 var $scope, controller;
	 beforeEach(angular.mock.module('angular'));
  beforeEach(inject(function ($rootScope, $controller) {
	   $scope = $rootScope.$new();
	   $location = jasmine.createSpyObj('$location', ['url']);
	   controller = $controller('sign_up', {
	     $scope: $scope,
	     $location: $location
	   });
	 }));


	 it('should have  controller', function() {
    expect(angular.sign_up).toBeDefined();
  });

 it('should jump to the /home path when / is accessed', function() {
    browser().navigateTo('#/');
    expect(browser().location().path()).toBe("/login");
  });

  it('ensures user can log in', function() {
    browser().navigateTo('#/login');
    expect(browser().location().path()).toBe("/login");

    input('email').enter('test@test.com');
    input('password').enter('password');
    element('submit').click();

   
  });

  it('should keep invalid logins on this page', function() {
    browser().navigateTo('#/login');
    expect(browser().location().path()).toBe("/login");


    input('email').enter('invalid@test.com');
    input('password').enter('wrong password');
    element('submit').click();
    expect(browser().location().path()).toBe("/login");

  });

});
