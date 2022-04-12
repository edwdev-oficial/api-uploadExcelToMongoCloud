const XLSX = require('xlsx');

const Planilha = {

    getPlanilha(data){
        try{

            workbook = XLSX.read(data, {
                type: 'binary'
            });

            var sheetNames = workbook.sheetNames;
            var indexSheet = sheetNames.indexOf(namePlanilha);
            var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[indexSheet]]);
            return xlData; 

        }catch(error){
            return {error: error.message}
        }
    }

};

module.exports = Planilha;