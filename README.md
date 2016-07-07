# tabClick
tabClick makes creating powerful tabs in content super easy
* less than 1.3kB
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
		// 1 - (open one or none tab at a time; toggle menu)
		// 2 - (open/close tabs independently; faqs)
		,tabOpenByDefault
		// 0 - first tab
		// 1 - second tab
		// -1 - close all tabs
		// 'a' - open all tabs (in type 2)
		// [] - none open (same as -1)
		// [2,3] - second and third tab (in type 2)
		,isLazyHover
		// 0 - no effect on hover
		// 1 - simulate click on hover after 380ms
		// 2 - show on hover (instantly)
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
	$().tabClickInit('P','.score span','.section span',2,[2,3],1,1);
});
```

To change Tab via script
```javascript
$().tabClick('P',2); // open third tab
$().tabClick('P',[2,3]); // open third, fourth tab
$().tabClick('P','a'); // open all tabs
$().tabClick('P',-1); // close all tabs
```
