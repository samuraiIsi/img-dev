var toggleBtnMenuIcon = function() {
    document.getElementById("sideNavMenu").classList.toggle('side__nav--opened');
    document.getElementById("btn__sideNavigation").classList.toggle('change');
    var getList = document.getElementById('sideNavMenu__List').classList.value;
    if (getList == "active") {
        document.getElementById('sideNavMenu__List').classList.value = 'closed';
    } else {
        document.getElementById('sideNavMenu__List').classList.value = 'active';
    }

};

var toggleBoxCaption = function(e) {
    e.classList.toggle('hoverCaption');
};

var validateForm = function() {
    var name = document.forms["contactForm"]["name"].value;
    var subject = document.forms["contactForm"]["subject"].value;
    var email = document.forms["contactForm"]["email"].value;
    regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailValidation = regExpEmail.test(email);
    error = document.getElementsByClassName("error");
    for (i = 0; i < error.length; i++) {
        error[i].style.display = "none";
    }
    if (name == null || name == "") {
        error[0].style.display = "block";
    } else if (subject == null || subject == "") {
        error[1].style.display = "block";
    } else if (email == null || email == "") {
        error[2].style.display = "block";
    } else if (!emailValidation) {
        error[3].style.display = "block";
    }
    if(name.length && subject.length && email.length && emailValidation) {
        document.forms["contactForm"]["submit"].disabled = false;
    } else {
        document.forms["contactForm"]["submit"].disabled = true;
    }
};

var onblurContactInput = function() {
    error = document.getElementsByClassName("error");
    for (i = 0; i < error.length; i++) {
        error[i].style.display = "none";
    }
};

var animateBoxes = function(e) {

    var btnsNoActive = document.getElementsByClassName('btn-primary');
    for (var j = 0; j < btnsNoActive.length; j++) {
        btnsNoActive[j].classList.remove('active');
    };
    e.currentTarget.classList.add('active');
    var allBoxesClass = document.querySelectorAll('.box_parent');
    var buttonData = e.currentTarget.attributes[3].nodeValue;
    var boxesActive = document.querySelectorAll("[data-filter=" + buttonData + "]");
    if (buttonData == 'all') {
        for (var i = 0; i < allBoxesClass.length; i++) {
            allBoxesClass[i].classList.remove('box-animation--hide');
        }
    } else {
        for (var i = 0; i < allBoxesClass.length; i++) {
            allBoxesClass[i].classList.add('box-animation--hide');
        }
        for (var i = 0; i < boxesActive.length; i++) {
            boxesActive[i].classList.remove('box-animation--hide');
        }
    }

}
/*
var showAllBoxes = function() {
    var allBoxesClass = document.querySelectorAll('.box_parent');
    for (var i = 0; i < allBoxesClass.length; i++) {
        allBoxesClass[i].classList.remove('box-animation--hide');
    }
}*/
