define("ui/tabby",["ui/testdata", "ui/slidenav", "ui/toolbar"], function(testdata, slidenav, toolbar) {

viewerPanel = {
            id: "viewer_panel",
            rows: [toolbar.buttons, 
				{
            	   view: "template",
            	   content: "image_viewer"}]
        };

data = "hello";

var tabby = {
	view: "tabview",	
  	cells: [
    		
			{
      			header: "Grid",
				body:{
						
                    rows: [
                            {cols: [ slidenav.view, { view: "resizer"}, viewerPanel ]},                        
                            {view: "slider", id: "slider", label:"Angle", value:"0", min:-180, max: 180,  name:"s1", step:1}   
                            ]  				
              }
      			
      		},
    		{
      			header: "Slice",
      			
      		},	
			{
      			header: "Slice",
      			
      		},
			{
      			header: "Radiology",
      			
      		}
	]
};

	return {
        view: tabby
    }

});
