cordova.define("dk.evry.tesseract.Tesseract", function(require, exports, module) {var tesseract = {
    createEvent: function(startDate, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'Tesseract', // mapped to our native Java class called "TesseractPlugin"
           'addTesseractEntry', // with this action name
           [{                  // and this array of custom arguments to create our entry
              //Do something like this
				//"title": title,
               // "description": notes,
               // "eventLocation": location,
               "sampleTest": sampleTest,
               // "endTimeMillis": endDate.getTime()+            
               }]
        ); 
    }
}
module.exports = tesseract;
});
