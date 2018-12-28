import { FILE_SEARCH } from './Api'

export function postFileUpload(fd) {
    return async (dispatch) => {

        console.log("postFileUpload action")

        var token = sessionStorage.getItem("token")
        var request = new Request("/api/files", {
            method: 'POST',
            headers: {
                "authorization": token
            },
            body: fd
        })
        try {
            const payload = await fetch(request)
            const json = await (payload.json())
            if (json) {
                console.log("File Upload Response->"+JSON.stringify(json))
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export function searchFiles(searchText, searchType) {
    return async (dispatch) => {
        var url = FILE_SEARCH
        url = url.replace(":type",searchType)
        url = url.replace(":searchtext", searchText)
        console.log("url->"+url)
        var token = sessionStorage.getItem("token")
        var request = new Request(url, {
            method: 'GET',
            headers: {
                "authorization": token
            }
        })
        try {
            const payload = await fetch(request)
            const json = await (payload.json())
            console.log("json->"+JSON.stringify(json))
        } catch (err) {
            console.log(err)
        }

    }
}

export function addFavorite(id) {
    return async (dispatch) => {
        console.log(`add ${id}`)
    }
}

export function deleteFavorite(id) {
    return async (dispatch) => {
        console.log(`delete ${id}`)
    }
}