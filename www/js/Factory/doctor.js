var doctorFactory = angular.module("doctorFactory", ["ionic"]);

doctorFactory.factory("doctorFactory", function (httpService) {
  var doctor = function(data) {
    this.request = data;
    this.profile = null;
  };

  doctor.prototype.getProfileDoctor = function () {
    var self = this;
    var getDoctorUrl = "";
    var payload = {

    };
    return httpService.postAPI(getDoctorUrl, payload).then(function (data) {
      if(data.doctorProfileResponse.header.responseCode == 00) {
        self.profile = data.doctorProfileResponse.payload;
      }
    }, function (data) {

    })

  };
  return doctor;

});
