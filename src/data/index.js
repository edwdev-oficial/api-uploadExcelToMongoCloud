const XLSX = require('xlsx');

const Planilha = {

    getPlanilha(file, sheet){

        try{

            workbook = XLSX.read(file, {
                type: 'binary'
            });

            var sheetNames = workbook.SheetNames;
            var indexSheet = sheetNames.indexOf(sheet);
            var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[indexSheet]]);
            return xlData; 

        }catch(error){
            return {error: error.message}
        }
    }

};

module.exports = Planilha;