function getShortMessages(messages){
	return messages
		.map(function(msgObj){
			return msgObj.message;
		})
		.filter(function(msg) {
			return msg.length < 50;
		});
}

module.exports = getShortMessages;