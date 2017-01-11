var imgUrls = [
    'img/szp6mtc-min-min.jpg',
    'img/LDi7dQc-min-min.jpg',
    'img/QTWNuxD-min-min.jpg',
    'img/blSnwaJ-min-min.jpg',
    'img/Kd4vU6t-min-min.jpg',
    'img/GM8I8CN-min-min.jpg',
    'img/976ITaH-min-min.jpg',
    'img/47ePYw8.gif'
];

var article = document.getElementsByTagName('article')[0];

imgUrls.forEach(function(url) {
    setTimeout(function() {
        var img = document.createElement('img');
        img.src = url;
        img.className = 'cat';
        article.appendChild(img);
    }, 0);
});


var hrefs = [
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css',
    '/index.css'
];

hrefs.forEach(function(href) {

    var noscript = document.getElementsByTagName('noscript')[0];
    setTimeout(function() {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        noscript.parentNode.insertBefore(link, noscript);
    }, 0);
});

setTimeout(function(){
    loadScript('//code.jquery.com/jquery-1.11.3.min.js');
    loadScript('//platform.twitter.com/widgets.js');
}, 5);

function loadScript (url) {
    var first = document.getElementsByTagName('script')[0];
    var script = document.createElement('script');
    script.async = true;
    script.src = url;
    first.parentNode.insertBefore(script, first);
}

