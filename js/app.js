function FilterCtrl($scope) {
  /*
  blur
  brightness
  contrast
  url
  drop-shadow
  grayscale
  hue-rotate
  invert
  opacity
  sepla
  */
  $scope.name = "sam";
  $scope.filter_prefix = "-webkit-filter:";
  $scope.filters = [
    {
      "name":"blur",
      "value":1,
      "pre":"blur(",
      "post":"px)"
    },
    {
      "name":"brightness",
      "value":60,
      "pre":"brightness(",
      "post":"%)"
    },
    {
      "name":"contrast",
      "value":100,
      "pre":"contrast(",
      "post":"%)"
    }
  ];
 
  $scope.css = function() {
    // return raw css styles for injection
    var s_css_rules = $scope.filter_prefix;
    angular.forEach($scope.filters, function(filter) {
      s_css_rules += filter.pre + filter.value + filter.post + ' '
    });
    return s_css_rules + ';';
  }
 
  $scope.css_formatted = function() {
    // return formatted css for putting into a css file
    var s_css_formatted = '.css3_image_filter{';
    
    s_css_formatted += css();
    
    return s_css_formatted + '}';
  };
}