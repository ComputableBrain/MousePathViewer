define("ui/tabby",["ui/testdata"], function(testdata) {

viewerPanel = {
            id: "viewer_panel",
            rows: [toolbar.buttons, {
                view: "template",
                content: "image_viewer"
            }]
        };




var tabby = {
	view: "tabview",
	width: 1500,
	height: 5000,	
  	cells: [
    		{
      			header: "WSI Images"//,
				body: {
							view:"list",
							template:"#rank#. #title# <div style='padding-left:18px'> Year:#year#, votes:#votes# </div>",
							type:{
								height:60
							},
							select:true,
							data:big_film_set
				}
      			
    		},
			{
      			header: "Grid"
      			
      		},
    		{
      			header: "Slice"
      			
      		},	
			{
      			header: "Slice"
      			
      		},
			{
      			header: "Radiology"
      			
      		}
	]
};

	return {
        view: tabby
    }

});
