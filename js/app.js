function FilterCtrl($scope) {
  $scope.filters = [];
 
 
  $scope.css = function() {
    var s_css_rules = 'css?';
    angular.forEach($scope.filters, function(filter) {
      //s_css_rules += filter.value ? 0 : 1;
    });
    return s_css_rules;
  };
}