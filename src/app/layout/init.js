function init() {
    bodyFunction();
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }
    document.addEventListener('DOMContentLoaded', bars, false);
    document.addEventListener('DOMContentLoaded', buttons, false);
    document.addEventListener('DOMContentLoaded', boxes, false);
    document.addEventListener('DOMContentLoaded', menu, false);
    document.addEventListener('DOMContentLoaded', jumbotron, false);
    document.addEventListener('DOMContentLoaded', formStructure, false);
    var removeLoading = function() {
        var loadingV = document.getElementById('loading');
        setTimeout(function() {
            loadingV.className = loadingV.className.replace(/loading/, 'loading--no');
        }, 150);
    };
    document.addEventListener('DOMContentLoaded', removeLoading, false);
}
