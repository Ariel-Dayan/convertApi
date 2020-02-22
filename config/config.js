module.exports = {
    JPEG_QUALITY: Number(process.env.JPEG_QUALITY || '80'),
    LOGGER_INFO: {
        LOGGER_URL: process.env.LOGGER_URL || 'localhost:9200', 
    },
    SERVICE_NAME: process.env.SERVICE_NAME || 'convert-api',
    KASER_INFO: {
        interval:  Number(process.env.KASER_INTERVAL || '60'),
        intervalMargin: Number(process.env.KASER_INTERVAL_MARGIN || '5'),
        useHttp: (process.env.KASER_USE_HTTP || 'true') === 'true',
        hostname: process.env.KASER_HOST || 'localhost',
        port: Number(process.env.KASER_PORT || '5001'),
        useKasersConfig: (process.env.USE_KASERS_CONFIG || 'true') === 'true'
    },
    APM_INFO:{
        ACTIVE: (process.env.APM_ACTIVE || 'true') === 'true',
        SERVER: process.env.APM_SERVER || 'localhost:8200'
    }
};