const path = require('path');
const pngToJpeg = require('png-to-jpeg');
const Jimp = require('jimp');

const { JPEG_QUALITY } = require(path.resolve(__dirname, '../../../config/config'));

const jpeg = async (buffer) => {
    const image = await Jimp.read(buffer);

    // Set the quality of saved JPEG, 0 - 100. A low-quality image results in 
    // A smaller JPEG file, a high-quality image generates a relatively large file
    return image.quality(JPEG_QUALITY).getBufferAsync(Jimp.MIME_JPEG);

    // return pngToJpeg({quality: 90})(buffer);
}

module.exports = {
    jpeg
}