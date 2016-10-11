var querystring = require('querystring'),
    cache = require('memory-cache');

module.exports = function(config, dependencies, job_callback) {
    var credentials = config.credentials || 'jenkins';

    var logger = dependencies.logger;

    var options = {
        timeout: config.timeout || 15000,
        url: config.endpoint + '/api/json?tree=jobs[name,url,color,inQueue]'
    };

    if (config.credentials) {
        options.headers = {
            "authorization": "Basic " + new Buffer(config.globalAuth[authName].username + ":" +
                config.globalAuth[authName].password).toString("base64")
        };
    }

    var cache_expiration = 60 * 1000; //ms
    var cache_key = 'jenkins-queue:config-' + JSON.stringify(config); // unique cache object per job config
    if (cache.get(cache_key)) {
        return job_callback(null, cache.get(cache_key));
    }

    dependencies.easyRequest.JSON(options, function(error, viewData) {
        if (error)
            return job_callback(error);

        var result = {};

        if (viewData) {
            result = viewData;

            if (result.jobs) {
                var job = null;
                for (var i = result.jobs.length - 1; i >= 0; i--) {
                    job = result.jobs[i];
                    if (!job.inQueue) {
                        result.jobs.splice(i, 1);
                    }
                }
            }
        }

        var data = result;

        cache.put(cache_key, data, cache_expiration);

        job_callback(null, data);
    });
};