angular.module('MyBlog').controller('ProjectController',
    ['$scope', 'ProjectChangeService',
        function($scope, ProjectChangeService){
            //Project desc. show controller
            refresh();

            //Project list
            function refresh() {
                //0->default
                $scope.project_0 = ProjectChangeService.getProject(0);
                //1->Robot Tailor
                $scope.project_1 = ProjectChangeService.getProject(1);
                //2->Moodle App
                $scope.project_2 = ProjectChangeService.getProject(2);
                //3->Train Schedule
                $scope.project_3 = ProjectChangeService.getProject(3);
                //4->Device Controller
                $scope.project_4 = ProjectChangeService.getProject(4);
                //5->SLT Usage
                $scope.project_5 = ProjectChangeService.getProject(5);
                //6->Chat-Bot Project
                $scope.project_6 = ProjectChangeService.getProject(6);
            }

            $scope.$watch(ProjectChangeService.getCurrent, function (newValue) {
                refresh();
            },true);

            $scope.setCurrent = function (num) {
                ProjectChangeService.setCurrent(num);
            };
}]);