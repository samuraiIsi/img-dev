var formStructure = function() {
    var formHttps = new XMLHttpRequest();
    var formV = "../../../data/form.jsonld";

    formHttps.open("GET", formV, true);

    formHttps.onreadystatechange = function() {
        if (formHttps.readyState == 4 && formHttps.status == 200) {
            var myArr = JSON.parse(formHttps.responseText);
            formConstructor(myArr);
        }
    };

    formHttps.send();

    var formConstructor = function(data) {
        var formComp, divParent, label, labelText, divGroup, spanComp, iconComp, fieldComp, pError, pErrorText, divBtn, aComp, aCompText;
        formComp = document.createElement('form');
        formComp.setAttribute('name', 'contactForm');
        formComp.setAttribute('itemscope', 'itemscope');
        formComp.setAttribute('action', '/action.php');
        formComp.setAttribute('method', 'POST');
        formComp.addEventListener('change', validateForm);
        formComp.setAttribute('enctype', 'text/plain');
        formComp.setAttribute('novalidate', true);
        divBtn = document.createElement('div');
        divBtn.setAttribute('class', 'pull-right margin-top--20');
        aComp = document.createElement('input');
        aComp.setAttribute('type', 'submit');
        aComp.setAttribute('name', 'submit');
        aComp.setAttribute('value', 'Send');
        aComp.setAttribute('disabled', 'true');
        aComp.setAttribute('class', 'btn btn-danger btn--oval btn--width text-uppercase');
        divBtn.appendChild(aComp);
        for (var i = 0; i < data.infoForm.length; i++) {
            divParent = document.createElement('div');
            divParent.setAttribute('class', 'form-group');
            label = document.createElement('label');
            label.setAttribute('for', data.infoForm[i].labelFor);
            label.setAttribute('itemprop', data.infoForm[i].labelItemProp);
            labelText = document.createTextNode(data.infoForm[i].labelTexting)
            divGroup = document.createElement('div');
            divGroup.setAttribute('class', 'input-group');
            spanComp = document.createElement('span');
            spanComp.setAttribute('class', 'input-group-addon');
            iconComp = document.createElement('i');
            iconComp.setAttribute('class', data.infoForm[i].iconImg);
            fieldComp = document.createElement(data.infoForm[i].fieldTag);
            fieldComp.setAttribute('name', data.infoForm[i].fieldCompName);
            fieldComp.setAttribute('class', data.infoForm[i].fieldCompClass);
            fieldComp.setAttribute('placeholder', data.infoForm[i].fieldCompPlaceholder);
            label.appendChild(labelText);
            divParent.appendChild(label);
            if (data.infoForm[i].fieldTag == 'textarea') {
                fieldComp.setAttribute('rows', data.infoForm[i].fieldCompRows);
                divParent.appendChild(fieldComp);
            } else {
                fieldComp.setAttribute('type', data.infoForm[i].fieldCompType);
                fieldComp.setAttribute('required', data.infoForm[i].fieldCompRequired);
                //fieldComp.addEventListener('focus', onfocusContactInput);
                fieldComp.onfocus = (function(){
                    return function() { onfocusContactInput(this);}
                })();
                fieldComp.onblur = (function(){ 
                    return function() { onblurContactInput(this);}
                })();
                pError = document.createElement('p');
                pError.setAttribute('class', 'error');
                pErrorText = document.createTextNode(data.infoForm[i].errorText);
                pErrorRegExp = document.createElement('p');
                pErrorRegExp.setAttribute('class', 'error');
                pErrorRegExpText = document.createTextNode(data.infoForm[i].errorRegText);
                pError.appendChild(pErrorText);
                pErrorRegExp.appendChild(pErrorRegExpText);
                spanComp.appendChild(iconComp);
                divGroup.appendChild(spanComp);
                divGroup.appendChild(fieldComp);
                divParent.appendChild(divGroup);
                divParent.appendChild(pError);
                if (data.infoForm[i].errorRegText != null) {
                    divParent.appendChild(pErrorRegExp);
                }

            }
            formComp.appendChild(divParent);
            formComp.appendChild(divBtn);

            document.getElementById('formWrapper').appendChild(formComp);
        }

        var resourceVP = document.createElement('script');
        resourceVP.src = "assets/js/scroll_views.js";
        var script = document.getElementById('script_scroll');
        script.parentNode.appendChild(resourceVP);
    }
}
