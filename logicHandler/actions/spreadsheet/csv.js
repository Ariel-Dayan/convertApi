const XLSX = require('xlsx');

const xlsx = async (buffer) => {
    const workbook = XLSX.read(buffer, {type: 'array'})
    const wbout = XLSX.write(workbook, { bookType:'xlsx', type:'buffer' });

    return wbout;
}

module.exports = {
    xlsx
}