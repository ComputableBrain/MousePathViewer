define("overlay", ["osd", "scalebar", "jquery", "fabricjs", "zoomer"], function(osd, scalebar, $, fabricjs, viewer) {


 // fabric.Object.prototype.objectCaching = false;

// var TileSource = {
//               width: 190464,
//                 height: 102144,
//                 tileWidth: 256,
//                 tileHeight: 256,
//                 minLevel: 0,
//                 maxLevel: 10,
//                 getTileUrl: function(level, x, y) {
//                   return "http://candygram.neurology.emory.edu:8080/api/v1/item/58b59ed892ca9a000beee3e8/tiles/zxy/" + level + "/" + x + "/" + y;
//               }
//         };


// var viewer = OpenSeadragon({
//   id: "viewer1",
//   prefixUrl:"bower_components/openseadragon/built-openseadragon/openseadragon/images/",
//   tileSources: TileSource
// });


var overlay = viewer.fabricjsOverlay();
var canvas = overlay._fabricCanvas;

//console.log(canvas);


arr = [];

var rect1 = new fabric.Rect({
        left: 0,
        top: 0,
      opacity: 0.8,
        width: 18000,
        height: 18000,
      fill: '#FFA500',
      selectable: true
                    
      }); 

arr.push(rect1);
var rect2 = new fabric.Rect({
      left: 18001,
        top: 0,
      opacity: 0.8,
        width: 18000,
        height: 18000,
      fill: '#FF3400',
      selectable: true
    });
arr.push(rect2);
var rect3 = new fabric.Rect({
      left: 36001,
        top: 0,
      opacity: 0.8,
        width: 18000,
        height: 18000,
      fill: '#FF88AB',
      selectable: true
    });
arr.push(rect3);
var rect4 = new fabric.Rect({
      left: 0,
        top: 18001,
      opacity: 0.8,
        width: 18000,
        height: 18000,
      fill: '#FF725B',
      selectable: true
    });
arr.push(rect4);
var rect5 = new fabric.Rect({
      left: 18001,
        top: 18001,
      opacity: 0.8,
        width: 18000,
        height: 18000,
      fill: '#FF81A7',
      selectable: true
    });
arr.push(rect5);
var rect6 = new fabric.Rect({
      left: 36001,
        top: 18001,
      opacity: 0.8,
        width: 18000,
        height: 18000,
      fill: '#FF1891',
      selectable: true
    });
arr.push(rect6);

group = new fabric.Group(arr, {
       left: 0,
       top: 0,
       originX: "center", 
       originY: "center",
       angle: 0        
    });


viewer.addHandler('open', onImageOpen);

function drawCircle(top, left, height, width){

  //Circle 1
  leftCorner = left -2000 - (width / 2);
  topCorner = top - 2000 - (height / 2);

  //Circle 2
  leftCorner2 = leftCorner + (width / 3);

  //Circle 3
  leftCorner3 = leftCorner + (2 * width / 3);

  //Circle 4
  leftCorner4 = leftCorner + width;

  //Circle 5-8 top
  topMiddle = top - 2000;

  //Circle 9-12 top 
  topTop = top - 2000 + (height / 2)
  
  var circle1 = new fabric.Circle({
      radius: 2000, fill: 'green', left: leftCorner, top: topCorner
  });
  canvas.add(circle1);

  var circle2 = new fabric.Circle({
      radius: 2000, fill: 'green', left: leftCorner2, top: topCorner
  });
  canvas.add(circle2);

  var circle3 = new fabric.Circle({
      radius: 2000, fill: 'green', left: leftCorner3, top: topCorner
  });
  canvas.add(circle3);

  var circle4 = new fabric.Circle({
      radius: 2000, fill: 'green', left: leftCorner4, top: topCorner
  });
  canvas.add(circle4);

  var circle5 = new fabric.Circle({
      radius: 2000, fill: 'green', left: leftCorner, top: topMiddle
  });
  canvas.add(circle5);

  var circle6 = new fabric.Circle({
      radius: 2000, fill: 'green', left: leftCorner2, top: topMiddle
  });
  canvas.add(circle6);

  var circle7 = new fabric.Circle({
      radius: 2000, fill: 'green', left: leftCorner3, top: topMiddle
  });
  canvas.add(circle7);

  var circle8 = new fabric.Circle({
      radius: 2000, fill: 'green', left: leftCorner4, top: topMiddle
  });
  canvas.add(circle8);

  var circle9 = new fabric.Circle({
      radius: 2000, fill: 'green', left: leftCorner, top: topTop
  });
  canvas.add(circle9);

  var circle10 = new fabric.Circle({
      radius: 2000, fill: 'green', left: leftCorner2, top: topTop
  });
  canvas.add(circle10);

  var circle11 = new fabric.Circle({
      radius: 2000, fill: 'green', left: leftCorner3, top: topTop
  });
  canvas.add(circle11);

  var circle12 = new fabric.Circle({
      radius: 2000, fill: 'green', left: leftCorner4, top: topTop
  });
  canvas.add(circle12);





}

function updateCircle(top, left, height, width, scaleX, scaleY){


//Circle 1
  leftCorner = left -2000 - (width * scaleX / 2);
  topCorner = top - 2000 - (height * scaleY / 2);

  //Circle 2
  leftCorner2 = leftCorner + (width * scaleX / 3);

  //Circle 3
  leftCorner3 = leftCorner + (2 * width * scaleX/ 3);

  //Circle 4
  leftCorner4 = leftCorner + (width * scaleX);

  //Circle 5-8 top
  topMiddle = top - 2000;

  //Circle 9-12 top 
  topTop = top - 2000 + (height * scaleY / 2)
  
  canvas._objects[1].set({left: leftCorner, top: topCorner});
  canvas._objects[2].set({left: leftCorner2, top: topCorner});
  canvas._objects[3].set({left: leftCorner3, top: topCorner});
  canvas._objects[4].set({left: leftCorner4, top: topCorner});
  canvas._objects[5].set({left: leftCorner, top: topMiddle});
  canvas._objects[6].set({left: leftCorner2, top: topMiddle});
  canvas._objects[7].set({left: leftCorner3, top: topMiddle});
  canvas._objects[8].set({left: leftCorner4, top: topMiddle});
  canvas._objects[9].set({left: leftCorner, top: topTop});
  canvas._objects[10].set({left: leftCorner2, top: topTop});
  canvas._objects[11].set({left: leftCorner3, top: topTop});
  canvas._objects[12].set({left: leftCorner4, top: topTop});

  canvas.renderAll();




}

var masterHandler = function (evt) {
    var movingObject = evt.target;
    //console.log(movingObject.get('left'), movingObject.get('top'));
    
    //console.log("ScaleX = " + canvas._objects[0].scaleX );
    //console.log("ScaleY = " + canvas._objects[0].scaleY );

    updateCircle(group.top, group.left, group.height, group.width, group.scaleX, group.scaleY);

    //Redraw circlesS


    //Render
    //canvas.renderAll();


};

canvas.on('object:moving', masterHandler);
canvas.on('object:scaling', masterHandler);



function onImageOpen(){

  var imagePoint = viewer.viewport.viewportToImageCoordinates(viewer.viewport.getCenter());
  //console.log(viewer.viewport.getCenter());
  //console.log(imagePoint);
  //group.set({left: imagePoint.x, top: imagePoint.y});   
  //group.set({left: 0.1, top: 0.1});   
  //canvas.add(group);

  // console.log("Left: " + group.left);
  // console.log("Top: " + group.top);
  // console.log("Width: " + group.width);
  // console.log("Top: " + group.height);

  //console.log("Width = " + canvas._objects[0].width);
  //console.log("Height = " + canvas._objects[0].height);

  

  //drawCircle(group.top, group.left, group.height, group.width);
  




  
}



// viewer.addHandler('open', function() {

//         var tracker = new OpenSeadragon.MouseTracker({
//             element: viewer.container,
//             moveHandler: function(event) {
//                 var webPoint = event.position;
//                 var viewportPoint = viewer.viewport.pointFromPixel(webPoint);
//                 var imagePoint = viewer.viewport.viewportToImageCoordinates(viewportPoint);
//                 var zoom = viewer.viewport.getZoom(true);
//                 var imageZoom = viewer.viewport.viewportToImageZoom(zoom);

//                 document.getElementById("position").innerHTML = 'Web:<br>' + webPoint.toString() + 
//                     '<br><br>Viewport:<br>' + viewportPoint.toString() +
//                     '<br><br>Image:<br>' + imagePoint.toString() + '<br><br>Zoom:<br>' + (Math.round(zoom * 100) / 100) + 
//                 '<br><br>Image Zoom:<br>' + (Math.round(imageZoom * 100) / 100); 

//               document.getElementById("coord").innerHTML = "";

//               for (i = 1; i<=12; i+=1){
//                 document.getElementById("coord").innerHTML += 'Vertex' + i + '<br>(' + parseFloat(canvas.getObjects()[i].left + 2000) + ',' + parseFloat(canvas.getObjects()[i].top + 2000) + ')<br><br>';
//               } 
//             }
//         });
//   }
// ); 








   
		

	
                    


  return{
		canvas: canvas
	}   

});