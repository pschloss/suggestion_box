app.controller('SuggestionController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) {

	$scope.post = suggestions.posts[$routeParams.id];

	$scope.post.comment.upvote = function(post){
		post.upvotes += 1;
	};

	$scope.addComment = function(){

		$scope.post.comment = push({
			body:$scope.new_comment,
			upvote: 0
		})
		$scope.new_comment = "";
	}
}]);
