(function () {
    angular.module("app.data")
        .factory("weatherSvc", function ($http,$q) {
            return {
                find: findByLocation,
                getCurrent: getCurrentWeather,
                getForecast:getForecastWeather
            }
            function findByLocation(location) {
                var url = "http://api.openweathermap.org/data/2.5/find?q=" + location +"&APPID=2f15fd6897d3dbf99911c63802edf561";
                  
                var defer = $q.defer();
                $http.get(url)
                    .success(function (response) {
                        defer.resolve(response);
                    })
                     .error(function (err) {
                         defer.reject(err);
                     })

                return defer.promise;
            }

            function getCurrentWeather(id){
                var url = "http://api.openweathermap.org/data/2.5/weather?id=" + id +"&APPID=2f15fd6897d3dbf99911c63802edf561";
                
                  
                var defer = $q.defer();
                $http.get(url)
                    .success(function (response) {
                        defer.resolve(response);
                    })
                     .error(function (err) {
                         defer.reject(err);
                     })

                return defer.promise;
            }
            function getForecastWeather(id) {
                var url = "http://api.openweathermap.org/data/2.5/forecast/daily?id=" + id + "&APPID=2f15fd6897d3dbf99911c63802edf561";


                var defer = $q.defer();
                $http.get(url)
                    .success(function (response) {
                        defer.resolve(response);
                    })
                     .error(function (err) {
                         defer.reject(err);
                     })

                return defer.promise;
            }
        });
})();