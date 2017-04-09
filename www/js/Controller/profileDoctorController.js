mainController.controller("profileDoctorCtrl", function ($scope, doctorService) {

  $scope.profileDoctor = {};


  console.log(doctorService);
  $scope.profileDoctor.detail = doctorService.getDetailProfileDoctor();


});
