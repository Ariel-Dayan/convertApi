module.exports = {
    JPEG_QUALITY: Number(process.env.JPEG_QUALITY || '85'),
    SERVICE_NAME: process.env.SERVICE_NAME || 'convert-api',
};