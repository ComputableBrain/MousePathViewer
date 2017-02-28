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
						
                    cols: [
                        slidenav.view, {
                            view: "resizer"
                        },
                        viewerPanel
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
