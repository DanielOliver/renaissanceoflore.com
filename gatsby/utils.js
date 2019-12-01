// Replacing '/' would result in empty string which is invalid
module.exports.replacePath = function (path) {
    return (path === `/` ? path : path.replace(/\/$/, ``))
}
module.exports.trimByChar = function (string, character) {
    const first = [...string].findIndex(char => char !== character);
    const last = [...string].reverse().findIndex(char => char !== character);
    return string.substring(first, string.length - last);
}
module.exports.isEmptyOrSpaces = function (str) {
    return str === null || str === undefined || str.match(/^ *$/) !== null;
}
module.exports.formatAsLongDate = function (date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }
    return new Date(date).toLocaleDateString(undefined, options)
}