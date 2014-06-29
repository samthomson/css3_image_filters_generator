
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
  $scope.image_url = "http://0.cdn.samt.st/lightbox/0de2fe841f9c4c969b9911eb6a8b5c17a343c196.jpg";

  $scope.filter_prefix = "-webkit-filter:";
  $scope.filters = [
    {
      "name":"grayscale",
      "value":0,
      "default":0,
      "pre":"grayscale(",
      "post":"%)"
    },
    {
      "name":"sepia",
      "value":0,
      "default":0,
      "pre":"sepia(",
      "post":"%)"
    },
    {
      "name":"saturate",
      "value":100,
      "default":100,
      "pre":"saturate(",
      "post":"%)"
    },
    {
      "name":"invert",
      "value":0,
      "default":0,
      "pre":"invert(",
      "post":"%)"
    },
    {
      "name":"brightness",
      "value":100,
      "default":100,
      "pre":"brightness(",
      "post":"%)"
    },
    {
      "name":"blur",
      "value":0,
      "default":0,
      "pre":"blur(",
      "post":"px)"
    },
    {
      "name":"contrast",
      "value":100,
      "default":100,
      "pre":"contrast(",
      "post":"%)"
    }
  ];
 
  $scope.css = function() {
    // return raw css styles for injection
    var s_css_rules = $scope.filter_prefix;
    angular.forEach($scope.filters, function(filter) {
      if(filter.value !== filter.default)
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