# Object-SevensDisplay
###### This is a jQuery Plugin for Object-SevensDisplay
## Demo
###### [CodePen](http://codepen.io/ta7382/pen/jqxPLN)
![Imgur](http://i.imgur.com/7QZvupY.gif)
## Add CDN
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
```

## Add Link
```html
<link rel="stylesheet" type="text/css" href="SevenDisplay.css">
<script src="SevenDisplay.js"></script>
```

## Create a Tag
```html
<div class="sevenDisplay">
	<div class="dpA"></div>
	<div class="dpB"></div>
	<div class="dpC"></div>
	<div class="dpD"></div>
	<div class="dpE"></div>
	<div class="dpF"></div>
	<div class="dpG"></div>
</div>
```

　
## Initial
speed：default 1000
```javascript
$(function() {
	$('.sevenDisplay').sevenDisplay({
			speed: "1000"
		});
});
```
