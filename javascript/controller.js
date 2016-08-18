app.controller('brochureCtrl', function($scope, $http){
    $scope.view = {};
    $scope.view.message = "working!";
  


  $http({
    method: "GET",
    url: "https://www.pivotaltracker.com/services/v5/projects/1785477/stories",
    headers: {'X-TrackerToken': 'fdcf2f83957ee949cf15824377da6761'}
  }).then(function(stories){
    $scope.view.pivitolStories = stories.data;
      console.log(stories.data);

  })
  $http({
    method: "GET",
    url: "https://www.pivotaltracker.com/services/v5/projects/1785477/epics",
    headers: {'X-TrackerToken': 'fdcf2f83957ee949cf15824377da6761'}
  }).then(function(epics){
    $scope.view.pivitolEpics = epics.data;
      console.log(epics.data);

  })
});


// fdcf2f83957ee949cf15824377da6761
