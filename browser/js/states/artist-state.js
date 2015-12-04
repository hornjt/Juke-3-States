app.config(function($stateProvider){
	$stateProvider.state('artist', {
		url: '/artists',
		templateUrl: '/js/states/templates/all-artists.html',
		controller: 'ArtistsCtrl'
	})
})