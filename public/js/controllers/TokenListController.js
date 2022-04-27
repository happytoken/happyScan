angular.module('BlocksApp').controller('TokenListController', function($stateParams, $rootScope, $scope, $http) {
    $scope.$on('$viewContentLoaded', function() {   
        // initialize core components
        App.initAjax();
    });
    $scope.settings = $rootScope.setup;

    var tokenList = ($scope.settings.tokenList && $scope.settings.tokenList.indexOf("http") >= 0) ? $scope.settings.tokenList : ('/' + $scope.settings.tokenList);
    $http.get(tokenList)
      .then(function(res){
        var contentType = res.headers('Content-Type');
        if (contentType.indexOf('/json') > 0) {
          $scope.tokens = res.data;
        } else {
          $scope.tokens = [];
        }
      })

})