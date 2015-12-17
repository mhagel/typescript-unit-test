var spec;
(function (spec) {
    var app;
    (function (app) {
        var components;
        (function (components) {
            var people;
            (function (people) {
                describe('HelloWorld', function () {
                    describe('People Component', function () {
                        var $compile;
                        var $scope;
                        var dataservice;
                        beforeEach(angular.mock.module('app.components.people'));
                        beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_, _dataservice_) {
                            $scope = _$rootScope_.$new();
                            $compile = _$compile_;
                            dataservice = _dataservice_;
                        }));
                        describe('When: Using the Example File component with persons passed in as people', function () {
                            var compiledElement;
                            var controller;
                            var isolateScope;
                            var persons = [
                                { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
                                { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
                            ];
                            beforeEach(function () {
                                var element = angular.element('<ht-people people="persons"></ht-people>');
                                compiledElement = $compile(element)($scope);
                                $scope.$digest();
                                controller = element.controller('htPeople');
                                isolateScope = element.isolateScope();
                            });
                            it('The element should have a controller', function () {
                                expect(controller).toBeTruthy();
                            });
                            it('The element should have a isolateScope', function () {
                                expect(isolateScope).toBeTruthy();
                            });
                            it('The people property on the controller should be set to persons', function () {
                                PeopleController.getPeople();
                                $scope.$apply();
                                expect(controller.people).toEqual(persons);
                            });
                        });
                    });
                });
            })(people = components.people || (components.people = {}));
        })(components = app.components || (app.components = {}));
    })(app = spec.app || (spec.app = {}));
})(spec || (spec = {}));
