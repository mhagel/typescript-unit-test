namespace app.components.people {
    import dataservice = app.core.dataservice;
    export interface IPeopleController{
        people:any;
        getPeople();
    }

    class PeopleComponent implements ng.IDirective {
        templateUrl: string = 'app/components/people/people.html';
        restrict: string = 'E';
        controller: typeof PeopleController = PeopleController;
        controllerAs: string = 'vm';
        bindToController: boolean = true;
        scope: any = {
            people: '='
        };

        static instance() {
            return new People();
        }
    }

    PeopleController.$inject = ['dataservice'];
    class PeopleController implements IPeopleController {
        constructor() {
            var vm = this;
            vm.people = [];
            vm.getPeople = getPeople;
        }

        getPeople = () => {
            return dataservice.getPeople()
                .then(function (data) {
                    vm.people = data;
                    return vm.people;
                });
        };

    }

    angular
        .module('app.components.people')
        .directive('htPeople', PeopleComponent.instance);
}
