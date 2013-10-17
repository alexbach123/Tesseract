cordova.define("dk.evry.tesseract.Tesseract", function(require, exports, module) {var tesseract = {
    createEvent: function(sampleTest, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'Tesseract',// mapped to our native Java class called "Tesseract"
            'addTesseractEntry', // with this action name
            [{                  // and this array of custom arguments to create our entry
                
                "sampleTest": sampleTest
            }]
        );
    }
}
module.exports = tesseract;});