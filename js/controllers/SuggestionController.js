app.controller('SuggestionController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) {

	$scope.post = suggestions.posts[$routeParams.id];
	$scope.addComment = function(post){
		if(!post || post === ''){
			return;
		}
		$scope.post.push(post.comment)
	}
}]);
