var hrefs = [
    'supere.css'
];

hrefs.forEach(function(href) {

    var noscript = document.getElementsByTagName('noscript')[0];
    setTimeout(function() {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        noscript.parentNode.appendChild(link);
    }, 0);
});