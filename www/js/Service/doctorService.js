var profileDoctorService = angular.module("profileDoctorService", ["ionic"]);

profileDoctorService.service("doctorService", function (doctorFactory) {
    this.getDetailProfileDoctor = function () {
    var getProfile = new doctorFactory();
    return getProfile.getProfileDoctor().profile;
  }
});
