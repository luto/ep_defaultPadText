exports.padCreate = function(hook, context){
	var id = context.pad.id;
	var parts = id.split('_');
	var prefix = parts[0];
	var number = parts[1];
	
	console.log("got " + prefix);
	console.log("context: ");
	console.log(context);
	
	switch(prefix)
	{
		case 'mm':
		context.pad.setText("It's MobileMacs, number: " + number)
		break;
		case 'cre':
		context.pad.setText("It's CRE, number: " + number)
		break;
	}
}
