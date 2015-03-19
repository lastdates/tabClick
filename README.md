# tabClick
tabClick makes creating tabs in content super easy
* less than 1.2kB
* Tested in IE8, FireFox, Chrome
* [Live Demo](http://code.mgvz.com/tabClick/)


To include tabClick plugin
```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script type="text/javascript" src="jquery.tabClick.min.js"></script>
```

To create (initialize) tabs
```javascript
$(document).ready(function(){
	$().tabClickInit('uniqueName','tabHeadSelector','tabContentSelector',
		type
		// 0 - (open one tab at a time; tabbed content)
		// 1 - (open/close tabs independently; faqs)
		// 2 - (open one or none tab at a time; toggle menu)
		,tabOpenByDefault
		// 0 - first tab
		// 1 - second tab
		// [] - none open
		// [2,3] - second and third tab (in type 2)
		// 'a' - open all tabs (in type 2)
		// 'c' - close all tabs
		,isLazyHover
		// 0 - no effect on hover
		// 1 - simulate click on hover after 380ms
		,iskeyboardArrows
		// 0 - no effect of arrow keys
		// 1 - changes tab with left/right arrow keys
		,callbackFn
		// function(tabIndex,previousTabIndex){} - function to run after opening a tab
		// functionName - function to run after opening a tab
	);
});
```
Opened tab will have class="active" for styling reference

Sample code
```javascript
$(document).ready(function(){
	$().tabClickInit('P','.score span','.section span',2,[2,3,'a','c'],1,1);
});
```

To change Tab via script
```javascript
$().tabClick('P',2); // open third tab
$().tabClick('P',[2,3]); // open third, fourth tab
$().tabClick('P','a'); // open all tabs
$().tabClick('P','c'); // close all tabs
```
