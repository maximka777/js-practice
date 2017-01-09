var username = process.argv[2];
var comment = process.argv[3];

function html(strArr, ...args){
	function handle(str){
		return str.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
	}
	var result = "";
	for(var i = 0; i < strArr.length; i++){
		if(args[i])
			result += strArr[i] + handle(args[i]);
		else 
			result += strArr[i];
	}
	return result;
}

console.log(html`<b>${username} says</b>: "${comment}"`);