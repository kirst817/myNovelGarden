app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
})

app.directive('nmMainContent', function(){
  return {
    templateUrl: 'partials/main.partial.html',
    restrict: 'E'
  }
});

app.directive('nmHeader', function(){
  return {
    templateUrl: 'partials/header.partial.html',
    restrict: 'E',
  }
});
