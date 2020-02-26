const XLSX = require('xlsx');

const csv = async (buffer) => {
    const workbook = XLSX.read(buffer, {type: 'array'})
    const wbout = XLSX.write(workbook, { bookType:'csv', type:'buffer' });

    return wbout;
}

module.exports = {
    csv
}