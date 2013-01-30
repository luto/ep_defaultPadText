var settings = require('ep_etherpad-lite/node/utils/Settings');
var strftime = require('strftime');

function prepareText(text, number) {
    var dateTokenRegex = /\$date:([^$]+)\$/, dateToken;
  
    console.log("prepare: " + text + "   " + number);
    text = text.replace("$num$", number);

    // Extract the $date$-placeholder out of our template
    dateToken = dateTokenRegex.exec(text);
    
    // replace the full placeholder by the current date formatted using the given format
    text = text.replace(dateToken[0], strftime(dateToken[1]));

    return text;
}

exports.padCreate = function (hook, context) {
    var id = context.pad.id, show, number, text;

    for (show in settings.ep_defaultPadText) {
        if (id.indexOf(show) === 0) {
            number = id.substring(show.length);
            text = settings.ep_defaultPadText[show].text;
            text = prepareText(text, number);
            context.pad.setText(text);
        }
    }
};

