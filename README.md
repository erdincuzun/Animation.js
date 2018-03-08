# Animation.js
With animation.js, you can easily animate your a desired element of child elements in yor web page. Navigation bar of this animation contains links: Previous, Next, Show All, Hide All, Start Animation, and Stop Animation.

# Usage

Add animation.min.js yo your web page, then call initializeAnimation method for configuration of the animation.
```javascript
<script src="animation.min.js"></script>
<script>
     initializeAnimation(null, ".animation", "div,p", "#masthead,#secondary");
</script>
```
* The first parameter of this method is the number of elements. But this parameter is used by other libraries: obfc.js and entrel.js.
* The second parameter is the base element of animation. You can use a selector for setting this parameter.
* Third parameter is inner elements in the base element. You can use more than one selector for selecting the desired elements.
* Fourth parameters is used to set opacity of the selected elements.

Moreover, you can set time interval for animation and ocapity for elements.

```javascript
<script>
opacity = 0.1; //opacity of elements
timeInterval = 3000; //3 seconds
</script>
```
