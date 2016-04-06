app.service('postsRepository', function($http) {  
  this.getAll = function (success, error) {
      $http.get("api/posts").then(success, error);
  } 
  this.post = function (post, success, error) {
      $http.post("api/post", post).then(success, error);
  }
});