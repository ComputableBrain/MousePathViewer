define("config", function() {

    //This is the base URL for the API
    var BASE_URL = "http://candygram.neurology.emory.edu:8080/api/v1";

    //this is the URL for the site
    var HOST_URL = "http://candygram.neurology.emory.edu:8080";

    //Annotation file base URL
    var XML_BASE_URL = "http://digitalslidearchive.emory.edu:8001"

    //Girder collection name
    var COLLECTION_ID = "5899ff6192ca9a000c5156f7";
    var COLLECTION_NAME = "MOUSE_GLIOMA";

    //Default folder ID that is under the COLLECTION_NAME
    var DEFAULT_FOLDER_ID = "58b59ed492ca9a000beee3df";

    //Default folder ID that is under the COLLECTION_NAME
    var DEFAULT_PATIENT_ID = "58b59ed492ca9a000beee3df";

    return {
        BASE_URL: BASE_URL,
        HOST_URL: HOST_URL,
        XML_BASE_URL: XML_BASE_URL,
        COLLECTION_ID: COLLECTION_ID,
        DEFAULT_FOLDER_ID: DEFAULT_FOLDER_ID,
        DEFAULT_PATIENT_ID: DEFAULT_PATIENT_ID,
        COLLECTION_NAME: COLLECTION_NAME
    }
});
