define("ui/tabby",["ui/testdata", "ui/slidenav", "ui/toolbar"], function(testdata, slidenav, toolbar) {

viewerPanel = {
            id: "viewer_panel",
            rows: [toolbar.buttons, 
				{
            	   view: "template",
            	   content: "image_viewer"}]
        };

var tabby = {
	view: "tabview",	
  	cells: [
    		{
      			header: "WSI Images",
				body:{
							view:"list",
							template:"#rank#. #title# <div style='padding-left:18px'> Year:#year#, votes:#votes# </div>",
							type:{
								height:60
							},
							select:true,
							data:testdata.data
						}
      			
    		},
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
