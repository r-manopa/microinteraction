export function getParam(segment: number = 1) {
    const arr = window.location.hash.split('/')
    const value = arr[segment]
    return value
}