angular.module('MyBlog').factory('ProjectChangeService', [function () {
    //project description
    //0->default, 1,2,.... for other projects
    let current = 0;

    //Project list
    //0->default
    //1->Robot Tailor
    //2->Moodle App
    //3->Train Schedule
    //4->Device Controller
    //5->SLT Usage
    //6->Chat-Bot
    //7->Fabric Defect Detection System
    let arrProject = [true, false, false, false, false, false, false, false];

    let service = {};
    service.getCurrent = getCurrent;
    service.setCurrent = setCurrent;
    service.getProject = getProject;
    return service;

    function setCurrent(num) {
        current = num;
        for(let $i = 0; $i< arrProject.length; $i++){
            arrProject[$i] = false;
        }
        arrProject[num] = true;
    }
    function getCurrent() {return current;}
    function getProject(num){
        return arrProject[num];
    }
}]);