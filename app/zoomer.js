define("zoomer", ["osd",  "scalebar", "jquery", "jqueryui"],
    function(osd, scalebar, $) {


    	var TileSource = {
		        	width: 190464,
		            height: 102144,
		            tileWidth: 256,
		            tileHeight: 256,
		            minLevel: 0,
		            maxLevel: 10,
		            getTileUrl: function(level, x, y) {
		            	return "http://candygram.neurology.emory.edu:8080/api/v1/item/58b59ed892ca9a000beee3e8/tiles/zxy/" + level + "/" + x + "/" + y;
		        	}
				};


        viewer = osd({
            id: 'image_viewer',
            prefixUrl: "bower_components/openseadragon/built-openseadragon/openseadragon/images/",
            navigatorPosition: "BOTTOM_RIGHT",
            showNavigator: true,
            tileSources: TileSource
        });

        viewer.scalebar({
            type: osd.ScalebarType.MAP,
            pixelsPerMeter: 1000,
            minWidth: "75px",
            location: osd.ScalebarLocation.BOTTOM_LEFT,
            xOffset: 5,
            yOffset: 10,
            stayInsideImage: true,
            color: "rgb(150, 150, 150)",
            fontColor: "rgb(100, 100, 100)",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            fontSize: "small",
            barThickness: 2
        });


	
    

       

        return viewer;

});
