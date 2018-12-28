import SvcUtil from '../../util/SvcUtil';
import UserSvc from '../../service/UserSvc';
import { updateProfile } from './ProfileActions';

/*
function updateProfileAction(user) {
	return {
		type: "UPDATE_PROFILE",
		user
	}
}
*/

function updateUserItems(itms) {
    return {
        type: "UPDATE_USER_ITEMS",
        itms
    }
}

export function loadUserItems() {
    const svcUtil = new SvcUtil();

    return async (dispatch) => {
        var token = sessionStorage.getItem("token")
        var request = new Request(svcUtil.getRestBaseUri() + "/users", {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "authorization": token,
                "User-Agent": "Cogs App",
                "Accept": "application/json"
             }
        })
        try {
            const payload = await fetch(request)
            const json = await (payload.json())
            if (json) {
                dispatch(updateUserItems(json))
            } 
        } catch (err) {
            console.log(err)
        }
    }
}

export function postUserUpdate(user) {
    const svcUtil = new SvcUtil();

    return async (dispatch) => {
        var token = sessionStorage.getItem("token")
        var request = new Request(svcUtil.getRestBaseUri() + "/users", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "authorization": token,
                "User-Agent": "Cogs App",
                "Accept": "application/json"
             },
            body: JSON.stringify(user) 
        })
        try {
            const payload = await fetch(request)
            const json = await (payload.json())
            if (json) {
                dispatch(updateUserItems(json))
            } 
        } catch (err) {
            console.log(err)
        }
    }
}

export function getUserProfile(userName, tenantId) {
	const userSvc = new UserSvc();
	return dispatch => {
		return userSvc.getUserProfile(userName, tenantId).then(user => {
            dispatch(updateProfile(user))
		}).catch(error => {
			throw (error);
		})
	}
}

export function resetPassword(userName, email, tenantId) {
	const userSvc = new UserSvc();
	return dispatch => {
		return userSvc.resetPassword(userName, email, tenantId).then(user => {
		}).catch(error => {
			throw (error);
		})
	}
}

export function changePassword(userName, password, tenantId) {
	const userSvc = new UserSvc();
	return dispatch => {
		return userSvc.changePassword(userName, password, tenantId).then(user => {
		}).catch(error => {
			throw (error);
		})
	}
}
