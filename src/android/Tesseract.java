
package dk.evry.tesseract;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;
import android.app.Activity;
import android.content.Intent;
public class Tesseract extends CordovaPlugin {
	//Add tesseractEntry action to our plugin
	public static final String ACTION_ADD_TESSERACT_ENTRY = "addTesseractEntry";
	
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
	 
		try {
		    if (ACTION_ADD_TESSERACT_ENTRY.equals(action)) { 
		             JSONObject arg_object = args.getJSONObject(0);
		             //Intent calIntent = new Intent(Intent.ACTION_EDIT)
		             //.setType("vnd.android.cursor.item/event")
		             //.putExtra("beginTime", arg_object.getLong("startTimeMillis"));
		             String sampleTest = arg_object.getString("sampleTest");
		             this.SampleTest(sampleTest, callbackContext);
		             
		             //this.cordova.getActivity().startActivity(sampletest);
		             
		      
		             
		             
		       //this.cordova.getActivity().startActivity(calIntent);
		      // callbackContext.success();
		       return true;
		    }
		    callbackContext.error("Invalid action");
		    return false;
		} catch(Exception e) {
		    System.err.println("Exception: " + e.getMessage());
		    callbackContext.error(e.getMessage());
		    return false;
		} 
	}

	private void SampleTest(String sampletest, CallbackContext callbackContext) {
		 if (sampletest != null && sampletest.length() > 0) {
	            callbackContext.success(sampletest);
	        } else {
	            callbackContext.error("Expected one non-empty string argument.");
	        }
		
	}

}
