#Atlasboard Jenkins package

![Atlasboard Jenkins Package](https://github.com/incentro/atlasboard-jenkins-package/raw/master/screenshots/AtlasBoard-Jenkins.png)

A set of [Atlasboard](http://atlasboard.bitbucket.org) widgets for Jenkins.

##Widgets

###Jenkins Jobs Widget

![Jenkins Jobs Widget](https://github.com/incentro/atlasboard-jenkins-package/raw/master/screenshots/AtlasBoard-Jenkins-Widget-Jobs.png)

This widget shows all jobs in a view.

####Widget definition

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

####Widget configuration

    "jenkins-view": {
        "interval": 10000,
        "endpoint": "https://[jenkins-host]/view/[name-of-your-view]/",
        "credentials": "jenkins", //to configure in globalAuth.json
        "showUnstableOnly": true //will only show unstable builds within the view
    }

###Jenkins Build Widget

![Jenkins Build Widget](https://github.com/incentro/atlasboard-jenkins-package/raw/master/screenshots/AtlasBoard-Jenkins-Widget-Builds.png)

This widget shows all builds currently running. 

####Widget definition

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

####Widget configuration

    "jenkins-builds": {
        "interval": 10000,
        "endpoint": "https://[jenkins-host]/",
        "credentials": "jenkins", //to configure in globalAuth.json
    }

###Jenkins Queue Widget

![Jenkins Queue Widget](https://github.com/incentro/atlasboard-jenkins-package/raw/master/screenshots/AtlasBoard-Jenkins-Widget-Queue.png)

This widget shows all builds currently in the queue. 

####Widget definition

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

####Widget configuration

    "jenkins-queue": {
        "interval": 10000,
        "endpoint": "https://[jenkins-host]/",
        "credentials": "jenkins", //to configure in globalAuth.json
    }

###Jenkins Build & Queue Widget

![Jenkins Build & Queue Widget](https://github.com/incentro/atlasboard-jenkins-package/raw/master/screenshots/AtlasBoard-Jenkins-Widget-BuildQueue.png)

This widget shows all builds and jobs currently in the queue. 

####Widget definition

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

####Widget configuration

    "jenkins-buildqueue": {
        "interval": 10000,
        "endpoint": "https://[jenkins-host]/",
        "credentials": "jenkins", //to configure in globalAuth.json
    }

##How to install
Once you have your Atlasboard setup, open a shell in root folder. Type in the following command to install it:

    git submodule add https://github.com/incentro/atlasboard-jenkins-package.git packages/jenkins

