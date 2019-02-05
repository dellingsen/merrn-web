import SvcUtil from '../../util/SvcUtil';

function updateAuthenticationToken(token) {
    return {type: "UPDATE_AUTHENTICATION_TOKEN", token}
}

function updateAuthenticationError(errorMessage) {
    return {type:"UPDATE_AUTHENTICATION_ERROR", errorMessage}
}

export function authenticateUser(userId, password) {
    const svcUtil = new SvcUtil();

    console.log("LoginActions: restBaseUri = " + svcUtil.getRestBaseUri());

    return async (dispatch) => {
        var request = new Request(svcUtil.getRestBaseUri() + "/login", {
            method: 'POST',
            headers: {
                "User-Agent": "Cogs App",
                "content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ email: userId, password: password }),
            json: true
        })
        try {
            const payload = await fetch(request)
            const json = await (payload.json())
            if (json.token) {
                dispatch(updateAuthenticationToken(json.token))
                sessionStorage.setItem("token","Bearer " + json.token)
                sessionStorage.setItem("userId", userId)
                sessionStorage.setItem('userToken', JSON.stringify(json.user));				
                window.location.reload()
            }
        } catch (err) {
            dispatch(updateAuthenticationError("Login Attempt Failed"))        
        }
    }
}
