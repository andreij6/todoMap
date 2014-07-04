todoApp.controller('HomeCtrl', function ($scope, IData) {
    $scope.todoItem;

    $scope.processItem = function () {
        var arrayOfWords = $scope.todoItem.split(" ");
        var result;

        $.each(arrayOfWords, function (index, value) {
            var potentialCity;
            //--ToDo
            //Punctuation
            //multi word Cities
            // Case sensitivity

            if (value[0] === value[0].toUpperCase()) {

                if (index !== (arrayOfWords.length - 1))
                {
                    if(arrayOfWords[index + 1][0] == arrayOfWords[index + 1][0].toUpperCase())
                    {
                        potentialCity = value + " " + arrayOfWords[index + 1];

                        if (IData.Cities.indexOf(potentialCity) !== -1)
                        {
                            result = potentialCity;
                        }
                    }
                }

                if (IData.Cities.indexOf(value) !== -1) {

                    result = arrayOfWords[index];
                }

            }

        });

        console.log(result);
    }

    //var map = L.map('map').setView([51.505, -0.09], 13);
});