todoApp.controller('HomeCtrl', function ($scope, IData) {
    $scope.todoItem;
    
    $scope.processItem = function () {
        var arrayOfWords = $scope.todoItem.split(" ");

        $.each(arrayOfWords, function (index, value) {
            if(IData.Cities.indexOf(value) !== -1)
            {
                console.log(arrayOfWords[index]);
            }
        });

    }
});