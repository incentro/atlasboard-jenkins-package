widget = {

    onData: function(el, data) {

        $('.jobs', el).empty();
        $('h1', el).html(data.name);
        if (data.jobs.length) {
            var jobsText = (data.jobs.length === 1) ? "job" : "jobs";
            $('h2', el).html("<a href='" + data.url + "'>" + data.jobs.length + " " + jobsText + "</a>");
        } else {
            $('h2', el).html("There are no jobs in this view");
        }


        if (data.jobs.length > 0) {

            data.jobs.forEach(function(job) {
                var listItem = $("<li/>");

                var $jobData = $("<div class=\"job-data\"/>");
                $jobData.append($("<strong/>").addClass("job-name").append("<a target=_blank href='" + job.url + "'>" + job.name + "</a>"));
                listItem.append($jobData);

                switch (job.color) {
                    case "red":
                        listItem.addClass("failed");
                        break;
                    case "yellow":
                        listItem.addClass("unstable");
                        break;
                    case "notbuilt":
                        listItem.addClass("notbuilt");
                        break;
                    default:
                }

                $('.jobs', el).append(listItem);
            });

        } else {
            $('.jobs', el).append(
                "<div class='no-jobs-message'>" +
                "No jobs found" +
                "</div>");
        }

        $('.content', el).show();
    }

};