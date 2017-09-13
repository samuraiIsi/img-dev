var bars = function() {

	var skillsHttps = new XMLHttpRequest();
    var bar = "data/skills.jsonld";

    skillsHttps.open("GET", bar, true);

    skillsHttps.onreadystatechange = function() {
        if (skillsHttps.readyState == 4 && skillsHttps.status == 200) {
            var myArr = JSON.parse(skillsHttps.responseText);
            barsConstructor(myArr);
        }
    };

    skillsHttps.send();

    function barsConstructor(data) {
        var divContent, divTitleParent, divTitle, divTitleText, divGraficParent, divProgress, divAnimate, divNumbersInv, divNumbersInvText, divNumbers, divNumbersText;
        for (var i = 0; i < data.infoSkills.length; i++) {
            divContent = document.createElement('div');
            divContent.setAttribute('itemscope', 'itemscope');
            divTitleParent = document.createElement('div');
            divTitleParent.setAttribute('class', 'col-sm-3 col-xs-4');
            divTitle = document.createElement('div');
            divTitle.setAttribute('class', 'text-right fs-xs--12');
            divTitle.setAttribute('itemprop', data.infoSkills[i].titleLanguage);
            divTitleText = document.createTextNode(data.infoSkills[i].titleText);
            divGraficParent = document.createElement('div');
            divGraficParent.setAttribute('class', 'col-sm-7 col-xs-8');
            divProgress = document.createElement('div');
            divProgress.setAttribute('class', 'progress');
            divAnimate = document.createElement('div');
            divAnimate.setAttribute('class', 'animate-view progress-bar ' + data.infoSkills[i].animateClass);
            divNumbersInv = document.createElement('div');
            divNumbersInv.setAttribute('class', 'visible-xs');
            divNumbersInv.setAttribute('itemprop', 'rating');
            divNumbersInvText = document.createTextNode(data.infoSkills[i].numberInvText);
            divNumbers = document.createElement('div');
            divNumbers.setAttribute('class', 'col-sm-2 hidden-xs');
            divNumbers.setAttribute('itemprop', 'rating');
            divNumbersText = document.createTextNode(data.infoSkills[i].numberText);

            divTitle.appendChild(divTitleText);
            divTitleParent.appendChild(divTitle);
            divNumbersInv.appendChild(divNumbersInvText);
            divAnimate.appendChild(divNumbersInv);
            divProgress.appendChild(divAnimate);
            divGraficParent.appendChild(divProgress);
            divNumbers.appendChild(divNumbersText);
            divContent.appendChild(divTitleParent);
            divContent.appendChild(divGraficParent);
            divContent.appendChild(divNumbers);

            document.getElementById('skills_wrapper').appendChild(divContent);
        }
    }
}
