var buttons = function() {
	var buttonshttps = new XMLHttpRequest();
    var button = "../../../data/buttons.jsonld";

    buttonshttps.open("GET", button, true);

    buttonshttps.onreadystatechange = function() {
        if (buttonshttps.readyState == 4 && buttonshttps.status == 200) {
            var myArr = JSON.parse(buttonshttps.responseText);
            buttonPrimaryConstructor(myArr);
            buttonFixed();
        }
    };

    buttonshttps.send();

	var buttonPrimaryConstructor = function(data) {
		var aComp, aCompText, insertListBtns, brComp, insertBreak;
		for(var i = 0; i < data.infoBtnPrimary.length; i++) {
			aComp = document.createElement('a');
			aComp.setAttribute('href', 'javascript:void(0)');
			aComp.setAttribute('tabindex', '-1');
			aComp.setAttribute('class', data.infoBtnPrimary[i].aClass);
			aComp.setAttribute('data-filter', data.infoBtnPrimary[i].dataFilter);
			aComp.onclick =  (function() { 
				var currentI = i;
                return function(e){
                    eval(data.infoBtnPrimary[currentI].methodData);
                }
            })();
			aCompText = document.createTextNode(data.infoBtnPrimary[i].aText);
			aComp.appendChild(aCompText);

			var insertListBtns = document.getElementById('box__container')
			insertListBtns.parentNode.insertBefore(aComp, insertListBtns);
		}
	}
};

var buttonFixed = function() {
	var aComp, divComp, divNumberLines = 3, insertListBtns;
	aComp = document.createElement('a');
	aComp.setAttribute('href', 'javascript:void(0)');
	aComp.onclick =  (function() { 
                return function(){
                    toggleBtnMenuIcon(this);
                }
            })();
	for(var i = 1; i <= divNumberLines; i++) {
		divComp = document.createElement('div');
		divComp.setAttribute('class', 'bar' + i);
		aComp.appendChild(divComp);
	}
	document.getElementById('btn__sideNavigation').appendChild(aComp);
};