var sharedModuleComponents = sharedModuleComponents || angular.module('sharedModuleComponents', []);
sharedModuleComponents.service("apiService", function($http) {    	
	this.getData = function(api, returnData) {
        $http.get(api)
            .then(function(response) { returnData(response.data, "get"); },
                  function(error) { /*error = {"data": "", "status": "", "statusText": ""}*/ });
    },
    this.postWithoutHeaders = function(api, param, returnData) {
        $http({
            method: 'POST',
            url: api,
            data: param                       
        }).then(function(response) { returnData(response.data); },
                  function(error) {/*error = {"data": "", "status": "", "statusText": ""}*/ });
    },
    this.postData = function(api, param, returnData) {
        $http({
            method: 'GET',
            url: api,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj){
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: param
        })
            .then(function(response) { returnData(response.data); },
                  function(error) { /*error = {"data": "", "status": "", "statusText": ""}*/ });
    }
});


sharedModuleComponents.factory('listService', function(){
	var filterObj={};
	var setFilters = function(value, type){
		filterObj[type] = value;   
	}
	var getFilters = function(value, type){
		return filterObj;
	}
	var resetFilters = function(){
		filterObj = {};  
		return filterObj;
	}	
	return {
	 setFilters : setFilters,
	 getFilters: getFilters,
	 resetFilters: resetFilters
	} 
});

angular.module('sharedModuleComponents')
 .factory('employeeListService', function(){
	var employeeObj={};	
	var setEmployeeDetails = function(employee,employeeArray){		
		employeeObj = employee;
	}	
	var getEmployeeDetails = function(){
		return employeeObj;
	}
	var resetEmployeeDetails = function(){
		employeeObj = {};
		return employeeObj;
	}
	return {
		setEmployeeDetails: setEmployeeDetails,
		getEmployeeDetails: getEmployeeDetails,
		resetEmployeeDetails: resetEmployeeDetails
	} 
});

angular.module('sharedModuleComponents')
.factory('projectTomobilizeService', function(){
	var project = {};	
	var setProject = function(projectId){
		project = {"projectId":projectId};
	}	
	var getProject = function(){
		return project;
	}
	var resetProject = function(){
		project = {};
		return project;
	}
	return {
		setProject: setProject,
		getProject: getProject,
		resetProject: resetProject
	} 
});
