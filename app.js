
Slack = require('node-slackr');
slack = new Slack('https://hooks.slack.com/services/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');

messages = {
  text: "Server Down",
  channel: "#notifications",
 "attachments": [
        {
            "fallback": "Required plain-text summary of the attachment.",
            "color": "#2eb886",
            "pretext": "Optional text that appears above the attachment block",
            "author_name": "Bobby Tables",
            "author_link": "https://static.dialogflow.com/common/favicon.png",
            "author_icon": "download.png",
            "title": "Slack API Documentation",
            "title_link": "https://static.dialogflow.com/common/favicon.png",
            "text": "Optional text that appears within the attachment",
            "fields": [
                {
                    "title": "Priority",
                    "value": "High",
                    "short": false
                }
            ],
            //"image_url": "https://static.dialogflow.com/common/favicon.png",
            "thumb_url": "https://static.dialogflow.com/common/favicon.png",
			"thumb_link": "https://static.dialogflow.com/common/favicon.png",
            "footer": "Slack API",
            "footer_icon": "https://static.dialogflow.com/common/favicon.png",
            "ts": 123456789
        }
    ] 
	
};
 
slack.notify(messages, function(err, result) {
    console.log(err, result);
});