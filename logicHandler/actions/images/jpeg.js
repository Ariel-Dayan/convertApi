const Jimp = require('jimp');

const png = async (buffer) => {
    const image = await Jimp.read(buffer);

    return image.getBufferAsync(Jimp.MIME_PNG);
}

module.exports = {
    png
}