var boxes = function() {
    var boxesHttps = new XMLHttpRequest();
    var box = "../../../data/boxes.jsonld";

    boxesHttps.open("GET", box, true);

    boxesHttps.onreadystatechange = function() {
        if (boxesHttps.readyState == 4 && boxesHttps.status == 200) {
            var myArr = JSON.parse(boxesHttps.responseText);
            boxConstructor(myArr);
        }
    };

    boxesHttps.send();
    var boxConstructor = function(data) {
        var divParent, divAnimation, divThumbnail, aComp, imgComp, divBoxCaption, divBoxContentParent, divBoxContentTitle, spanContentTitle, spanContentTitleText, divboxCategory, divBoxCategoryText, btnView, spanBtnView, noBtnView, noBtnViewText, insertBoxes;
        for (var i = 0; i < data.infoBoxCaption.length; i++) {
            divParent = document.createElement('article');
            divParent.setAttribute('itemscope', 'itemscope');
            divParent.setAttribute('class', data.infoBoxCaption[i].divParentClass);
            divParent.setAttribute('data-filter', data.infoBoxCaption[i].divParentDataFilter);
            divAnimation = document.createElement('div');
            divAnimation.setAttribute('class', data.infoBoxCaption[i].divAnimationClass);
            divThumbnail = document.createElement('div');
            divThumbnail.setAttribute('class', data.infoBoxCaption[i].divThumbnailClass);
            aComp = document.createElement('a');
            aComp.setAttribute('href', 'javascript:void(0)');
            imgComp = document.createElement('img');
            imgComp.setAttribute('src', data.infoBoxCaption[i].imgCompSrc);
            imgComp.setAttribute('alt', data.infoBoxCaption[i].imgCompAlt);
            divBoxCaption = document.createElement('div');
            divBoxCaption.setAttribute('class', data.infoBoxCaption[i].divBoxCaptionClass);
            divBoxCaption.onclick = (function() {
                return function() { toggleBoxCaption(this); }
            })();
            divBoxContentParent = document.createElement('div');
            divBoxContentParent.setAttribute('class', data.infoBoxCaption[i].divBoxContentParentClass);
            divBoxContentTitle = document.createElement('div');
            divBoxContentTitle.setAttribute('class', data.infoBoxCaption[i].divBoxContentTitleClass);
            spanContentTitle = document.createElement('span');
            spanContentTitleText = document.createTextNode('Built With:');
            spanX = document.createElement('span');
            spanXText = document.createTextNode('X');
            divboxCategory = document.createElement('div');
            divboxCategory.setAttribute('class', data.infoBoxCaption[i].divboxCategoryClass);
            divboxCategory.setAttribute('itemprop', 'experience');
            divBoxCategoryText = document.createTextNode(data.infoBoxCaption[i].boxCategoryText);
            btnView = document.createElement(data.infoBoxCaption[i].viewTag);
            if (data.infoBoxCaption[i].viewTag == 'a') {
                btnView.setAttribute('type', 'button');
                btnView.setAttribute('class', data.infoBoxCaption[i].linkA);
                btnView.setAttribute('href', data.infoBoxCaption[i].urlWeb);
                btnView.setAttribute('target', "_blank");
                spanBtnView = document.createElement('span');
                spanBtnView.setAttribute('class', data.infoBoxCaption[i].btViewClass);
                btnView.appendChild(spanBtnView);
            } else {
                btnViewText = document.createTextNode(data.infoBoxCaption[i].urlWeb);
                btnView.setAttribute('class', data.infoBoxCaption[i].linkA);
                btnView.appendChild(btnViewText);
            }
            divboxCategory.appendChild(divBoxCategoryText);
            spanContentTitle.appendChild(spanContentTitleText);
            divBoxContentTitle.appendChild(spanContentTitle);
            divBoxContentParent.appendChild(divBoxContentTitle);
            divBoxContentParent.appendChild(divboxCategory);
            divBoxCaption.appendChild(divBoxContentParent);
            divBoxCaption.appendChild(btnView);
            aComp.appendChild(imgComp);
            aComp.appendChild(divBoxCaption);
            divThumbnail.appendChild(aComp);
            divAnimation.appendChild(divThumbnail);
            divParent.appendChild(divAnimation);

            document.getElementById('box__container').parentNode.appendChild(divParent);
        }

    }
}
