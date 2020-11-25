export const checkTime = (time) => {
    if (time < 10) {time = "0" + time};
    return time;
}

export const htmlParser = (text) => {
    const parser = new DOMParser();
    return parser.parseFromString(text, 'text/html');
}