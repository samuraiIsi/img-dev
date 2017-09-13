var menu = function() {
    var xmlhttps = new XMLHttpRequest();
    var menuNav = "../../../data/sideNavMenu.jsonld";
    
    xmlhttps.open("GET", menuNav, true);
    
    xmlhttps.onreadystatechange = function() {
        if (xmlhttps.readyState == 4 && xmlhttps.status == 200) {
            var myArr = JSON.parse(xmlhttps.responseText);
            menuConstructor(myArr);
        }
    };

    xmlhttps.send();

    function menuConstructor(data) {
        var ulComp, liComp, aComp, aCompText;
        ulComp = document.createElement('nav');
        ulComp.setAttribute('id', 'sideNavMenu__List');

        for (var i = 0; i < data.liCompInfo.length; i++) {
            aComp = document.createElement('a');
            aComp.setAttribute('href', '#' + data.liCompInfo[i].aLink);
            aComp.setAttribute('class', data.liCompInfo[i].aClass);
            aComp.onclick =  (function() { 
            	var currentI = i;
                return function(e){
                    smoothScroll(data.liCompInfo[currentI].aLink);
                    e.preventDefault();
                }
            })();
            aCompText = document.createTextNode(data.liCompInfo[i].aText);
            aComp.appendChild(aCompText);
			ulComp.appendChild(aComp);
        }
        document.getElementById('sideNavMenu').appendChild(ulComp);
    }
}