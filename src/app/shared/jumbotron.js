var jumbotron = function() {
    var jumbotronhttps = new XMLHttpRequest();
    var jumbo = "../../../data/jumbotron.jsonld";

    jumbotronhttps.open("GET", jumbo, true);

    jumbotronhttps.onreadystatechange = function() {
        if (jumbotronhttps.readyState == 4 && jumbotronhttps.status == 200) {
            var myArr = JSON.parse(jumbotronhttps.responseText);
            jumbotronConstructor(myArr);
        }
    };

    jumbotronhttps.send();

    var jumbotronConstructor = function(data) {
        var compParent, divOpacity, divName, divNameText, divTitle, divTitleText;
        for (var i = 0; i < data.infoJumbo.length; i++) {
            compParent = document.createElement(data.infoJumbo[i].compParentTag);
            compParent.setAttribute('itemscope', 'itemscope');
            compParent.setAttribute('class', data.infoJumbo[i].jumboClass);
            divOpacity = document.createElement('div');
            divOpacity.setAttribute('class', data.infoJumbo[i].opacityDiv);
            divName = document.createElement(data.infoJumbo[i].divTitleTag);
            if(data.infoJumbo[i].itemPropName != null){
                divName.setAttribute('itemprop', data.infoJumbo[i].itemPropName);
            }
            divNameMark = document.createElement(data.infoJumbo[i].compNameMark);
            divName.setAttribute('class', data.infoJumbo[i].jumboTitle);
            divNameText = document.createTextNode(data.infoJumbo[i].jumboTitleText);
            divTitle = document.createElement(data.infoJumbo[i].jumboSubTitleTag);
            divTitle.setAttribute('class', data.infoJumbo[i].jumboSubTitleClass);
            divTitle.setAttribute('itemprop', data.infoJumbo[i].itemPropTitle);
            divTitleText = document.createTextNode(data.infoJumbo[i].jumboSubTitleText);
            divTitle.appendChild(divTitleText);
            if(data.infoJumbo[i].compNameMark != undefined) {
                divNameMark.appendChild(divNameText);
                divName.appendChild(divNameMark);
            } else {
                divName.appendChild(divNameText);
            }
            if(data.infoJumbo[i].opacityDiv != " ") compParent.appendChild(divOpacity);
            compParent.appendChild(divName);
            compParent.appendChild(divTitle);

            document.getElementById(data.infoJumbo[i].section).appendChild(compParent);
        }
    }
}
