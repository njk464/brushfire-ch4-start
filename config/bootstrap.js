/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  	Video.count().exec(function(err, numVideos) {
		if (err) {
			return cb(err);
		}
		if (numVideos > 0) {
			console.log('Number of video records: ', numVideos);
			return cb();
		}
		// No records in the video model, seed the database.
		console.log('There are no video records.');
		return cb();
	});
};
