var hrefs = [
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css',
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
    loadScript('//platform.twitter.com/widgets.js');
    loadScript('//code.jquery.com/jquery-1.11.3.min.js');
}, 5);

function loadScript (url) {
    var first = document.getElementsByTagName('script')[0];
    var script = document.createElement('script');
    script.async = true;
    script.src = url;
    first.parentNode.insertBefore(script, first);
}


