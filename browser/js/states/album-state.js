app.config(function($stateProvider){
	$stateProvider.state('album', {
		url: '/albums',
		templateUrl: '/js/states/templates/all-albums.html',
		controller: 'AlbumsCtrl'
	})
})