var settings = require('ep_etherpad-lite/node/utils/Settings');
var strftime = require('strftime');

/*
"ep_defaultPadText" : {
                        "mm" : {
				               "text"   : "asdsad numerb:$num$ date:$date:%y$"
                               }
                      },

*/

exports.padCreate = function(hook, context)
{
	var id = context.pad.id;
	
	for(show in settings.ep_defaultPadText)
	{
		if(id.indexOf(show) == 0)
		{
			var number = id.substring(show.length);
			var text = settings.ep_defaultPadText[show].text;
			text = prepareText(text, number);
			context.pad.setText(text);
		}
	}
}

function prepareText(text, number)
{
	console.log("prepare: " + text  + "   " + number);
	text = text.replace("$num$", number);
	
	var dateTokenRegex = /\$date:([^$]+)\$/;
	var dateToken = dateTokenRegex.exec(text);
	text = text.replace(dateToken[0], strftime(dateToken[1]));
	
	return text;
}
