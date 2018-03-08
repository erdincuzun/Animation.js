// Animation
// animation.js, v1.0
// Copyright (c)2018 Erdinç Uzun
// Distributed under MIT license
var selectedElement;
var len;
var selector;
var subselectors;
var timeInterval = 3000;
var opacity = 0.3;
var opacitySelectors;

function initializeAnimation(_len, _selector, _subselectors, _opacitySelectors) {
    if (typeof _len === 'undefined' || _len == null)
        len = "";
    else
        len = _len;
    if (typeof _selector === 'undefined' || _selector == null)
        selector = "";
    else
        selector = _selector;
    if (typeof _subselectors === 'undefined' || _subselectors == null)
        subselectors = "";
    else
        subselectors = _subselectors;

    if (typeof _opacitySelectors === 'undefined' || _opacitySelectors == null)
        opacitySelectors = "";
    else
        opacitySelectors = _opacitySelectors;

    if (selector != "" && subselectors != "")
        addClasstoElements();

    if (opacitySelectors != "")
        changeOpacityofElements();


    document.getElementById("navbar").style.display = "block";
    selectedElement = len;

    document.getElementById("pre").onclick = hidePreviousClass;
    document.getElementById("next").onclick = showNextClass;
    document.getElementById("show").onclick = showClasses;
    document.getElementById("hide").onclick = hideClasses;
    document.getElementById("start").onclick = start_action;
    document.getElementById("stop").onclick = stop_action;
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("show").style.visibility = "hidden";
    document.getElementById("stop").style.visibility = "hidden";
}

function addClasstoElements() {
    var theElement = document.querySelector(selector);
    var elementsoftheElement = theElement.querySelectorAll(subselectors);
    len = elementsoftheElement.length - 1;
    selectedElement = len;
    var cnt = 0;
    for (i = 0; i < elementsoftheElement.length; i++) {
        elementsoftheElement[i].setAttribute("class", "animation o" + i);
    }
}

function changeOpacityofElements() {
    var elementsoftheElement = document.querySelectorAll(opacitySelectors);
    for (i = 0; i < elementsoftheElement.length; i++) {
        elementsoftheElement[i].style.opacity = opacity;
    }
}

function visibility(_sel) {
    if (_sel) {
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("pre").style.visibility = "hidden";
        document.getElementById("show").style.visibility = "visible";
        document.getElementById("hide").style.visibility = "hidden";
    }
    else{
        document.getElementById("next").style.visibility = "hidden";
        document.getElementById("pre").style.visibility = "visible";
        document.getElementById("show").style.visibility = "hidden";
        document.getElementById("hide").style.visibility = "visible";
    }
}

function hideClasses() { //hide all class contains animation
    selectedElement = -1;
    var _elements = document.getElementsByClassName("animation");
    for (var i = 0; i < _elements.length; i++)
        _elements[i].style.visibility = "hidden";  

    visibility(true);
}

function showClasses() { //show all class contains animation
    selectedElement = len;
    var _elements = document.getElementsByClassName("animation");
    for (var i = 0; i < _elements.length; i++)
        _elements[i].style.visibility = "visible";

    visibility(false);
}

function showNextClass() { //hide all class contains animation        

    if (selectedElement != len) //last element and not first element
    {
        selectedElement++;
        if (selectedElement == len)
            visibility(false);  

        var _elements = document.getElementsByClassName("o" + selectedElement);

        if (_elements.length > 0 && selectedElement <= len) {
            for (var i = 0; i < _elements.length; i++)
                _elements[i].style.visibility = "visible";
        }//if any element 

        if (selectedElement == 0)
            document.getElementById("pre").style.visibility = "visible";
    }
    
}

function hidePreviousClass() { //hide all class contains animation  
    if (selectedElement != -1) {
        var _elements = document.getElementsByClassName("o" + selectedElement);
        if (_elements.length > 0 && selectedElement >= -1) {
            for (var i = 0; i < _elements.length; i++)
                _elements[i].style.visibility = "hidden";
        }//if any element  

        selectedElement--;
        if (selectedElement == -1)
            visibility(true);
        if (selectedElement < len)
            document.getElementById("next").style.visibility = "visible";
    }        
}


//timer
var myVar;
function start_action() {
    document.getElementById("stop").style.visibility = "visible";
    hideClasses();
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("pre").style.visibility = "hidden";
    document.getElementById("show").style.visibility = "hidden";
    document.getElementById("hide").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("stop").style.visibility = "visible";
    myVar = setInterval(myTimer, timeInterval);
}

function stop_action() {
    clearInterval(myVar); //stop
    document.getElementById("stop").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "visible";
    showClasses();
}

function myTimer() {
    showNextClass();
    if (selectedElement == len) {
        clearInterval(myVar);
        document.getElementById("stop").style.visibility = "hidden";
        document.getElementById("start").style.visibility = "visible";
    }       
}
