
FontFaceOnLoad("Cardo", {
    'success': function(){
        //console.dir(document.getElementsByClassName("cardo"));
        Array.prototype.slice(document.getElementsByClassName("cardo")).forEach(function(elem){
            elem.className += " cardo-loaded";
        });
    }
});