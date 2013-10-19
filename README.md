meteor-ace-embed
================
Add Ace editor to Meteor. 

A simple way to get the latest version of Ace installed into meteor via meteorite/atmosphere.

##Install
Run this command in the shell.
```js
mrt add ace-embed
```

You will need to add some manual code to get everything up and running.

Add the html div classes to your template. The {{#constant}}{{/constant}} tags will prevent it 
redrawing as template refreshes. The div id #aceEditor is what ace will connect to.
```html
{{#constant}}
<div id='aceEditor'></div>
{{/constant}}
```

Css has been added by the package but can be overrien by your app. It only sets the size of the #aceEditor box.
```css
#aceEditor {
	width: 100%;
	height: 150px;
}
```

In your js code enable the editor. More info can be found here:
```js
var	editor = ace.edit("aceEditor");
	editor.setTheme("ace/theme/xcode");
	editor.getSession().setMode("ace/mode/css");
	editor.setHighlightActiveLine(true);
```    

