namespace spec.app.components.people {
    import PeopleController = app.components.people.IPeopleController;

    describe('HelloWorld', () => {
        describe('People Component', () => {

            var $compile:ng.ICompileService;
            var $scope:ng.IScope;
            var dataservice; //need type

            beforeEach(angular.mock.module('app.components.people'));

            beforeEach(angular.mock.inject((_$compile_, _$rootScope_, _dataservice_) => {
                $scope = _$rootScope_.$new();
                $compile = _$compile_;
                dataservice = _dataservice_;
            }));

            describe('When: Using the Example File component with persons passed in as people', () => {
                var compiledElement:ng.IAugmentedJQuery;
                var controller:IPeopleController;
                var isolateScope:ng.IScope;
                var persons:ng.IAugmentedJQuery = [
                    { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
                    { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' },
                ];

                beforeEach(() => {
                    let element = angular.element('<ht-people people="persons"></ht-people>');
                    compiledElement = $compile(element)($scope);
                    $scope.$digest();

                    controller = <IPeopleController>element.controller('htPeople');
                    isolateScope = element.isolateScope();
                });

                it('The element should have a controller', () => {
                    expect(controller).toBeTruthy();
                });

                it('The element should have a isolateScope', () => {
                    expect(isolateScope).toBeTruthy();
                });

                it('The people property on the controller should be set to persons', () => {
                    PeopleController.getPeople();
                    $scope.$apply();

                    expect(controller.people).toEqual(persons);
                });

            });

        });
    });
}


