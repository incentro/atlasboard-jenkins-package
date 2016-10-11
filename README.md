#Atlasboard Jenkins package

![Atlasboard Jenkins Package](https://github.com/incentro/atlasboard-jenkins-package/raw/master/screenshots/AtlasBoard-Jenkins.png)

##Widgets

###Jenkins Jobs Widget

![Jenkins Jobs Widget](https://github.com/incentro/atlasboard-jenkins-package/raw/master/screenshots/AtlasBoard-Jenkins-Widget-Jobs.png)

This widget shows all jobs in a view.

    {
        "enabled": true,
        "row": 1,
        "col": 1,
        "width": 2,
        "height": 4,
        "widget": "jenkins-jobs",
        "job": "jenkins-jobs",
        "config": "jenkins-view"
    }

    "jenkins-view": {
        "interval": 10000,
        "endpoint": "https://[jenkins-host]/view/[name-of-your-view]/",
        "credentials": "jenkins", //to configure in globalAuth.json
        "showUnstableOnly": true //will only show unstable builds within the view
    }

###Jenkins Build Widget

![Jenkins Build Widget](https://github.com/incentro/atlasboard-jenkins-package/raw/master/screenshots/AtlasBoard-Jenkins-Widget-Builds.png)

This widget shows all builds currently running. 

    {
        "enabled": true,
        "row": 1,
        "col": 1,
        "width": 2,
        "height": 4,
        "widget": "jenkins-build",
        "job": "jenkins-build",
        "config": "jenkins-builds"
    }

    "jenkins-builds": {
        "interval": 10000,
        "endpoint": "https://[jenkins-host]/",
        "credentials": "jenkins", //to configure in globalAuth.json
    }

###Jenkins Queue Widget

![Jenkins Queue Widget](https://github.com/incentro/atlasboard-jenkins-package/raw/master/screenshots/AtlasBoard-Jenkins-Widget-Queue.png)

This widget shows all builds currently in the queue. 

    {
        "enabled": true,
        "row": 1,
        "col": 1,
        "width": 2,
        "height": 4,
        "widget": "jenkins-queue",
        "job": "jenkins-queue",
        "config": "jenkins-queue"
    }

    "jenkins-queue": {
        "interval": 10000,
        "endpoint": "https://[jenkins-host]/",
        "credentials": "jenkins", //to configure in globalAuth.json
    }

###Jenkins Build & Queue Widget

![Jenkins Build & Queue Widget](https://github.com/incentro/atlasboard-jenkins-package/raw/master/screenshots/AtlasBoard-Jenkins-Widget-BuildQueue.png)

This widget shows all builds and jobs currently in the queue. 

    {
        "enabled": true,
        "row": 1,
        "col": 1,
        "width": 2,
        "height": 4,
        "widget": "jenkins-buildqueue",
        "job": "jenkins-buildqueue",
        "config": "jenkins-buildqueue"
    }

    "jenkins-buildqueue": {
        "interval": 10000,
        "endpoint": "https://[jenkins-host]/",
        "credentials": "jenkins", //to configure in globalAuth.json
    }
