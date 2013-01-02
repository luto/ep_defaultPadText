var settings = require('ep_etherpad-lite/node/utils/Settings');

/*
"ep_defaultPadText" : {
                   "defaultText" : {
                                     "prefix" : "mm",
                                     "text"   : "asdsad numerb:$num$ date:$date$"
                                   }
                 }
*/

exports.padCreate = function(hook, context)
{
	var id = context.pad.id;
	
	for(show in settings.ep_defaultPadText)
	{
		if(id.indexOf(show) == 0)
		{
			console.log("It is: " + show.prefix)
			var text = settings.ep_defaultPadText[show].text;
			text = prepareText(text, id);
			context.pad.setText(text);
		}
	}
}

function prepareText(text, number)
{
	// TODO
	return text;
}
