export default function whiteCir() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `<span class="whiteCir" ng-click="whiteCir($event)"></span>`
    },
    controller: ['$scope', function ($scope) {
      var vm = this;
      $scope.whiteCir = function (event) {
        var elem = event.target;
        var that = $(elem)
        var index = that.parent('.ap_cont_item').index();
        $('.ap_cont_item').removeClass('current').eq(index).addClass('current');
      }
    }]
  }
}