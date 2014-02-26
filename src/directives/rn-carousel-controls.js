angular.module('angular-carousel')

.directive('rnCarouselControls', [function() {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      items: '=',
      index: '='
    },
    link: function(scope, element, attrs) {
      scope.prev = function() {
        if(sope.index === 0) {
          scope.index = scope.items.length-1;
        } else {  
          scope.index--;
        }
      };
      scope.next = function() {
        if(scope.index === scope.items.length-1) {
          scope.index=0;
        } else {   
          scope.index++;
        }   
      };
    },
    template: '<div class="rn-carousel-controls">' +
                '<span class="rn-carousel-control rn-carousel-control-prev" ng-click="prev()"></span>' +
                '<span class="rn-carousel-control rn-carousel-control-next" ng-click="next()"></span>' +
              '</div>'
  };
}]);
