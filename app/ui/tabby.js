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
            body:{
          view:"datatable",
          rowHeight: 250, 
          columns:[
            { id:"slide",    header:"Slide Number",     width:100},
            { id:"thumbnail",   header:"Thumbnail",    width:310}            
          ],
          data: [
            { slide:1, thumbnail:"<img src=\"Slide1.jpg\" alt=\"Mountain View\" style=\"width:304px;height:228px;\">"},
            { slide:2, thumbnail:"<img src=\"Slide2.jpg\" alt=\"Mountain View\" style=\"width:304px;height:228px;\">"},
            { slide:3, thumbnail:"<img src=\"Slide3.jpg\" alt=\"Mountain View\" style=\"width:304px;height:228px;\">"},
            { slide:4, thumbnail:"<img src=\"Slide4.jpg\" alt=\"Mountain View\" style=\"width:304px;height:228px;\">"},
            { slide:5, thumbnail:"<img src=\"Slide5.jpg\" alt=\"Mountain View\" style=\"width:304px;height:228px;\">"},
            { slide:6, thumbnail:"<img src=\"Slide6.jpg\" alt=\"Mountain View\" style=\"width:304px;height:228px;\">"}
    ]
}
      			
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
