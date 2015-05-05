var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	view.query('posts', keystone.list('Post').model.find().limit(4).sort('sortOrder'));
	
	// Render the view
	view.render('index');
	
};
