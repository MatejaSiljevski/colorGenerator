const rgbConverter = (x) => {
    let hex = x.toString(16)
    return hex.length == 1 ? '0' + hex : hex
}

const rgbToHex = (r,g,b) => {
    return '#' + rgbConverter(r) + rgbConverter(g) + rgbConverter(b) 
}

export default rgbToHex