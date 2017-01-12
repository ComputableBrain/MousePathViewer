define("overlay", ["osd", "scalebar", "jquery", "fabric"], function(osd, scalebar, $, fabric) {



		var overlay = { 
		init: function() {
			var self = this;

            	this.viewer = osd({
            	id: 'image_viewer',
            	prefixUrl: "bower_components/openseadragon/built-openseadragon/openseadragon/images/",
            	navigatorPosition: "BOTTOM_RIGHT",
            	showNavigator: true,
            	tileSources: "http://node15.cci.emory.edu/cgi-bin/iipsrv.fcgi?DeepZoom=/var/www/CDSA/CDSA_Logo_v1.tif.dzi.tif.dzi"
        	});
					


			this.viewer.scalebar({
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

		// initialize overlay
                    
		var overlay2 = this.viewer.fabricjsOverlay();
		var canvas = overlay2.fabricCanvas();
		//console.dir(canvas);

        // add fabric rectangle
		canvas.selection = false;
		canvas.selectionBorderColor = 'blue';
		canvas.selectionLineWidth = 100;					
		canvas.selectionColor = "rgba(63, 123, 191)";
					                    
				

                    var rect1 = new fabric.Rect({
                      left: 0,
                      top: 0,
					  opacity: 0.1,
                      width: 2000,
                      height: 2000,
					  fill: '#FF0000'					  	
                    }); 

					var rect2 = new fabric.Rect({
                      left: 2001,
                      top: 0,
					  opacity: 0.1,                      
                      width: 2000,
                      height: 2000,
					  fill: '#cc33ff'					   		
                    }); 

                    var rect3 = new fabric.Rect({
                      left: 4001,
                      top: 0,
					  opacity: 0.1,  
                      width: 2000,
                      height: 2000,
					  fill: '#0000ff'
                    }); 

                    var rect4 = new fabric.Rect({
                      left: 0,
                      top: 2001,
					  opacity: 0.1,  
                      width: 2000,
                      height: 2000,
					  fill: '#00ff99'
                    });

                    var rect5 = new fabric.Rect({
                      left: 2001,
                      top: 2001,
					  opacity: 0.1,  
                      width: 2000,
                      height: 2000,
					  fill: '#ffff00'
                    });

                    var rect6 = new fabric.Rect({
                      left: 4001,
                      top: 2001,
					  opacity: 0.1,  
                      width: 2000,
                      height: 2000,
					  fill: '#ff3399' 
                    });
                    
					var group = new fabric.Group([rect1, rect2, rect3, rect4, rect5, rect6 ], {
 						 left: 0,
						  top: 10,					 
					});

					console.log(group);
                    canvas.add(group);           
                   
                    
           
                    
                    $(window).resize(function() {
                        overlay2.resize();
                        overlay2.resizecanvas();
                    });
                };

		console.log("hello");

       

        return overlay;

}
console.log(overlay);
});
