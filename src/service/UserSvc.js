
import request from 'request-promise';
import SvcUtil from '../util/SvcUtil';

export default class UserSvc {

	saveUserProfile(userProfile, token) {
		const svcUtil = new SvcUtil();
		return (
			request({
				method: 'POST',
				uri: svcUtil.getRestBaseUri() + "/profile",
				"headers": {
					"Content-Type": "application/json",
					"authorization": token,
				},
				body: userProfile,
				json: true
			})
				.then(function (parsedBody) {
					return parsedBody;
				})
				.catch(function (err) {
					console.log(err);
				})
		)
	}

	updateUserProfile(userName, userProfile, tenantId) {
		const svcUtil = new SvcUtil();
		return (
			request({
				method: 'PUT',
				uri: svcUtil.getRestBaseUri() + "/userprofile/" + userName + "?tenantId=" + tenantId,
				"headers": {
					"User-Agent": "D3 App",
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				body: userProfile,
				json: true
			})
				.then(function (parsedBody) {
					return parsedBody;
				})
				.catch(function (err) {
					console.log(err);
				})
		)
	}

	getUsers(tenantId, customerId) {
		const svcUtil = new SvcUtil();
		return (
			request({
				"method": "GET",
				"uri": svcUtil.getRestBaseUri() + "/userprofile?tenantId=" + tenantId + "&customerId=" + customerId,
				"json": true,
				"headers": {
					"User-Agent": "D3 App"
				}
			})
		)
	}

	getUserProfile(userName, tenantId) {
		const svcUtil = new SvcUtil();
		return (
			request({
				"method": "GET",
				"uri": svcUtil.getRestBaseUri() + "/userprofile/" + userName + "?tenantId=" + tenantId,
				"json": true,
				"headers": {
					"User-Agent": "D3 App"
				}
			})
		)
	}

	deleteUserProfile(userName, tenantId) {
		const svcUtil = new SvcUtil();
		return (
			request({
				"method": "DELETE",
				"uri": svcUtil.getRestBaseUri() + "/userprofile/" + userName + "?tenantId=" + tenantId,
				"json": true,
				"headers": {
					"User-Agent": "D3 App"
				}
			})
		)
	}

	authenticateUser(userName, password, tenantId) {
		const svcUtil = new SvcUtil();
		return (
			request({
				method: 'POST',
				uri: svcUtil.getRestBaseUri() + "/userprofile/authenticate?tenantId=" + tenantId,
				"headers": {
					"User-Agent": "D3 App",
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				body: {userName: userName, password: password},
				json: true
			})
				.then(function (parsedBody) {
					return parsedBody;
				})
				.catch(function (err) {
				})
		)
	}

	resetPassword(userName, email, tenantId) {
		const svcUtil = new SvcUtil();
		console.log("Reset password for : " + email)
		return (
			request({
				"method": "GET",
				"uri": svcUtil.getRestBaseUri() + "/userprofile/reset/" + userName + "/" + email + "?tenantId=" + tenantId,
				"json": true,
				"headers": {
					"User-Agent": "D3 App"
				}
			})
		)
	}
	
	changePassword(userName, password, tenantId) {
		const svcUtil = new SvcUtil();
		return (
			request({
				method: 'POST',
				uri: svcUtil.getRestBaseUri() + "/userprofile/change?tenantId=" + tenantId,
				"headers": {
					"User-Agent": "D3 App",
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				body: {userName: userName, password: password},
				json: true
			})
				.then(function (parsedBody) {
					return parsedBody;
				})
				.catch(function (err) {
					console.log(err);
				})
		)
	}

}
