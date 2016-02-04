app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions',  function($scope, $routeParams, suggestions) {

	$scope.post = suggestions.posts[$routeParams.id];

	console.log($routeParams.id);

	$scope.addComment = function(){
		if(!$scope.new_comment || $scope.new_comment === ""){
			return;
		}

		$scope.post.comments.push({
			body: $scope.new_comment,
			upvotes: 0
		});
		$scope.new_comment = "";
	}

	$scope.upVoteComment = function(comment){
		comment.upvotes += 1;
	};

	$scope.new_comment = "";

}]);
