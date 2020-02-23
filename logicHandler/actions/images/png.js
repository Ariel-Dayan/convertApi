const path = require('path');
const pngToJpeg = require('png-to-jpeg');
const Jimp = require('jimp');

const { JPEG_QUALITY } = require(path.resolve(__dirname, '../../../config/config'));

const jpeg = async (buffer) => {
    const image = await Jimp.read(buffer);

    // background - Set the default new pixel colour for alpha pixels(0xFFFFFFFF === white).
    //
    // quality - Set the quality of saved JPEG, 0 - 100. A low-quality image results in 
    // A smaller JPEG file, a high-quality image generates a relatively large file.
    return image.background(0xFFFFFFFF).quality(JPEG_QUALITY).getBufferAsync(Jimp.MIME_JPEG);
}

module.exports = {
    jpeg
}