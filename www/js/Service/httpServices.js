var doctorService = angular.module("doctorService", ["ionic"]);

doctorService.service("httpService", function ($q, $http) {
  var defer = $q.defer();

  this.getAPI = function () {
    $http({
      method: "GET",
      url: url_api
    }).success(function (successResponse) {
      defer.resolve(successResponse);
    }).error(function (errorResponse) {
      defer.resolve(errorResponse);
    });
    return defer.promise;
  };

  this.postAPI = function () {
    $http({
      method: "POST",
      url: url_api
    }).success(function (successResponse) {
      defer.resolve(successResponse);
    }).error(function (errorResponse) {
      defer.resolve(errorResponse);
    });
    return defer.promise;
  }

});
