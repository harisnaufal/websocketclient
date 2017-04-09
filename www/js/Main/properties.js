function setProperties(env) {

  var development = {
    url_api : "http://localhost:8800/doctor/profile"
  };

  var production = {
    url_api : ""
  };

  if (env == "development") {
    return development;
  }
  else {
    return production;
  }
}
