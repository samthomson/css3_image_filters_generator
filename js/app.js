
var app = angular.module('app', ['vr.directives.slider']);

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
      "name":"grayscale",
      "value":0,
      "pre":"grayscale(",
      "post":"%)"
    },
    {
      "name":"sepia",
      "value":0,
      "pre":"sepia(",
      "post":"%)"
    },
    {
      "name":"saturate",
      "value":50,
      "pre":"saturate(",
      "post":"%)"
    },
    {
      "name":"invert",
      "value":0,
      "pre":"invert(",
      "post":"%)"
    },
    {
      "name":"brightness",
      "value":100,
      "pre":"brightness(",
      "post":"%)"
    },
    {
      "name":"blur",
      "value":0,
      "pre":"blur(",
      "post":"px)"
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
    
    s_css_formatted += $scope.css();
    
    return s_css_formatted + '}';
  };
}