var settings = require('ep_etherpad-lite/node/utils/Settings');
var strftime = require('strftime');

exports.padCreate = function(hook, context)
{
  var id = context.pad.id;
  
  for(var show in settings.ep_defaultPadText)
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
  text = text.replace("$num$", number) || text;
  
  // Extract the $date$-placeholder out of our template
  var dateTokenRegex = /\$date:([^$]+)\$/;
  var dateToken = dateTokenRegex.exec(text);
  // replace the full placeholder by the current date formatted using the given format
  text = text.replace(dateToken[0], strftime(dateToken[1]));
  
  return text;
}
