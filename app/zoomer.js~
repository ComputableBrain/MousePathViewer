define("zoomer", ["osd",  "scalebar", "jquery", "jqueryui"],
    function(osd, scalebar, $) {

        var viewer = osd({
            id: 'image_viewer',
            prefixUrl: "bower_components/openseadragon/built-openseadragon/openseadragon/images/",
            navigatorPosition: "BOTTOM_RIGHT",
            showNavigator: true,
            tileSources: "http://node15.cci.emory.edu/cgi-bin/iipsrv.fcgi?DeepZoom=/var/www/CDSA/CDSA_Logo_v1.tif.dzi.tif.dzi"
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


		// Using jQuery UI slider
		$("#slider").slider({
    		min: -180,
    		max: 180,
    	slide: function(event, ui) {
        viewer.viewport.setRotation(ui.value);
		//console.log(ui);
		

			arr = [];
			
			
			var rect1 = new fabric.Rect({
                      left: 800,
                      top: 0,
					  opacity: 0.8,
                      width: 500,
                      height: 500,
					  fill: '#FFA500',
					  selectable: true
											  	
                    }); 

			arr.push(rect1);
			var rect2 = new fabric.Rect({
					  left: 1301,
                      top: 0,
					  opacity: 0.8,
                      width: 500,
                      height: 500,
					  fill: '#FF3400',
					  selectable: true
					});
			arr.push(rect2);
		   var rect3 = new fabric.Rect({
					  left: 1801,
                      top: 0,
					  opacity: 0.8,
                      width: 500,
                      height: 500,
					  fill: '#FF88AB',
					  selectable: true
					});
			arr.push(rect3);
			var rect4 = new fabric.Rect({
					  left: 800,
                      top: 501,
					  opacity: 0.8,
                      width: 500,
                      height: 500,
					  fill: '#FF725B',
					  selectable: true
					});
			arr.push(rect4);
			var rect5 = new fabric.Rect({
					  left: 1301,
                      top: 501,
					  opacity: 0.8,
                      width: 500,
                      height: 500,
					  fill: '#FF81A7',
					  selectable: true
					});
			arr.push(rect5);
			var rect6 = new fabric.Rect({
					  left: 1801,
                      top: 501,
					  opacity: 0.8,
                      width: 500,
                      height: 500,
					  fill: '#FF1891',
					  selectable: true
					});
			arr.push(rect6);

		  	var group = new fabric.Group(arr, {
 						 left: 800,
						  top: 10,
						angle: ui.value					 
					});
				
			
			var canvas = new fabric.Canvas('osd-overlaycanvas-1');
			canvas.add(group);
			console.log(group);

				

    	}
		});
    

       

        return viewer;

});
