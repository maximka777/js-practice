function checkUsersValid(goodUsersList){
	return function(testUserList){
		return testUserList.every((testUser) => {
			return goodUsersList.some((goodUser) => {
				return testUser.id == goodUser.id;
			});
		});
	};
}

module.exports = checkUsersValid;