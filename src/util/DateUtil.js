export function getDate(date) {
    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear()
}

export function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes
    var strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
}

export function todaysDateAsString() {
    var date = new Date()
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
}