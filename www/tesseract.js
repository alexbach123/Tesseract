var tesseract = {
    createEvent: function(title, location, notes, startDate, endDate, successCallback, errorCallback) {
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
               // "startTimeMillis": startDate.getTime(),
               // "endTimeMillis": endDate.getTime()+            }]
        ); 
    }
}
module.exports = tesseract;
