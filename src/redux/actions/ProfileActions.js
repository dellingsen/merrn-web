import SvcUtil from '../../util/SvcUtil';
import UserSvc from '../../service/UserSvc';

function updateProfileAction(user) {
	return {
		type: "UPDATE_PROFILE",
		user
	}
}

export function saveUserProfile(userProfile) {
	const userSvc = new UserSvc();
	var token = sessionStorage.getItem("token")
	return dispatch => {
		return userSvc.saveUserProfile(userProfile, token).then(userProfile => {
			dispatch(updateProfileAction(userProfile))
		}).catch(error => {
			throw (error);
		})
	}
}

export function updateProfile(profile) {
	const svcUtil = new SvcUtil();

	return async (dispatch) => {
		var token = sessionStorage.getItem("token")
		var request = new Request(svcUtil.getRestBaseUri() + "/profile", {
			method: 'POST',
			headers: {
				"content-type": "application/json",
				"authorization": token
			},
			body: JSON.stringify(profile)
		})
		try {
			const payload = await fetch(request)
			const json = await (payload.json())
			if (json) {
				dispatch(updateProfileAction(json))
			}
		} catch (err) {
			console.log(err)
		}
	}
}

export function loadProfile(userId) {
	const svcUtil = new SvcUtil();

	return async (dispatch) => {
		//var url = "/api/users/"+userId
		var url = svcUtil.getRestBaseUri() + "/profile";
		var token = sessionStorage.getItem("token")
		var request = new Request(url, {
			method: 'GET',
			headers: {
				"Authorization": token,
				"content-type": "application/json"
			}
		})
		try {
			const payload = await fetch(request)
			const json = await (payload.json())
			if (json) {
				dispatch(updateProfileAction(json))
			}
		} catch (err) {
			console.log(err)
		}
	}
}
