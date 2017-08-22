(function () {
    function fontSize() {
        var _html = document.getElementsByTagName('html')[0];
        var w = document.documentElement.clientWidth;
        _html.style.fontSize = w / 3.2 + 'px';
    };
    fontSize();
    window.onresize = fontSize;

})()
