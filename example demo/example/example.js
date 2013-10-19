if (Meteor.isClient) {

	Template.aceEditor.rendered = function() {
		var editor = ace.edit("aceEditor");
		editor.setTheme("ace/theme/twilight");
		editor.getSession().setMode("ace/mode/css");
		editor.setHighlightActiveLine(true);
	};

}//END Meteor.isClient


if (Meteor.isServer) {

	Meteor.startup(function () {
		// code to run on server at startup
	});

}//END Meteor.isServer



