Package.describe({
	summary: "A jQuery & Ace Editor wrapper for meteorite on top of meteor."
});

//var bundlerApi = null
var path = Npm.require("path"),
	fs = Npm.require("fs"),
	packagePath = path.join(path.resolve("."), "packages", "ace-embed");

Package.on_use(function (api, where) {
	api.use(['jquery', "templating", "underscore", "deps"], ["client"]);

	//ace folder
	var files = fs.readdirSync(path.join(packagePath, "ace"));
	files.forEach(function(file){
	    if (file === "snippets"){
	    	return;
	    }
		api.add_files(path.join("ace", file), "client", {isAsset: true});
	});
	
	//snippets folder
	var snippets = fs.readdirSync(path.join(packagePath, "ace", "snippets"));
	snippets.forEach(function(file){
		snippetPath = path.join("ace", "snippets", file)
		api.add_files(snippetPath, "client", {isAsset: true});
	})
	
	api.add_files(["ace/ace.js", "ace/ext-modelist.js", "ace/theme-twilight.js", "ace/mode-css.js", "editorSetup.js", "ace.css"], "client");
});
