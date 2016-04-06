app.controller('postsController', function($scope, postsRepository) {

    $scope.newPost = {
        title: '',
        content: ''
    };

    $scope.submit = function() {
        postsRepository.post($scope.newPost,
            function success(response) {
                refresh();
            }, function error(response) {
                $scope.posts = [];
            })
    }

    function refresh() {
        postsRepository.getAll(function success(response) {
            $scope.posts = response.data;
        }, function error(response) {
            $scope.posts = [];
        });
    }


    refresh();

});