define("ui/slidenav", ["config", "slide", "jquery", "webix", "overlay"], function(config, slide, $, aperio, overlay) {

    thumbnailsPanel = {
        view: "dataview",
        id: "thumbnails_panel",
        select: true,        
        template: "<div class='webix_strong'>#name#</div><img src='" + config.BASE_URL + "/item/#_id#/tiles/thumbnail'/>",
        datatype: "json",
        height: 150,
        pager: "thumbPager",
		    type: {
            height: 170,
            width: 200
        },
        on: {
            "onItemClick": function(id, e, node) {
                
                item = this.getItem(id);
                slide.init(item);
                
            }
        }
    };

    

    //dropdown for slide groups 
    //Data is pulled from DAS webservice
    dropdown = {
        view: "combo",
        placeholder: "Select Slide Set",
        id: "slideset_list",
        options: {
            body: {
                template: "#name#"
            }
        },
        on: {
            "onChange": function(id) {
                //console.log("Hello0");				
                $$("thumbnail_search").setValue("");
                var item = this.getPopup().getBody().getItem(id);
                var url = config.BASE_URL + "/item?folderId="+item._id;
                $$("thumbnails_panel").clearAll();
                $$("thumbnails_panel").setPage(0);
                $.get(url, function(data){
                  $$("thumbnails_panel").parse(data);
                })             
				
            },
            "onAfterRender": function() {

               var url = config.BASE_URL + "/folder?parentType=folder&parentId="+config.COLLECTION_ID;
               //console.log(url);
               //console.log($);
               $$("slideset_list").getList().clearAll();
               $.get(url,function(data){
                  //$$("slideset_list").parse(data);

                   var foldersMenu = $$("slideset_list").getList();
                   foldersMenu.parse(data);
                  //console.log(data);
                  //console.log(parse(data));
               })
                //get the ID of the COLLECTION_NAME
                 // $.get(config.BASE_URL + "/resource/lookup?path=/collection/" + config.COLLECTION_NAME)
                 //    .then(function(collection) {
                 //        //get the folders (cohorts) for that collection
			
                 //        return $.get(config.BASE_URL + "/folder?parentType=collection&parentId=" + collection._id);
                 //    }).then(function(folders) {
                 //        var foldersMenu = $$("slideset_list").getPopup().getList();
                 //        foldersMenu.clearAll();
                 //        foldersMenu.parse(folders);
                 //        $$("slideset_list").setValue(folders[0].id);
                 //        url = config.BASE_URL + "/item?folderId="+folders[0]._id+"&limit=500";
			
			              //     $$("thumbnails_panel").clearAll();
                 //      	$$("thumbnails_panel").setPage(0);
                 //      	$$("thumbnails_panel").load(url);
                 //    }).done(function() {
                        
                 //    });
            }
        }
    };

    filter = {
        view: "search",
        id: "thumbnail_search",
        placeholder: "Search",
        
    };





scroll = {
        id: "metatable",
				view:"datatable",				
				autowidth: "true",
        height: 600,
        header: false,
    			columns:[
        				{ id:"property",     width:150},
        				{ id:"value",    width:150}
    					],
    			data: [
                {id:"web_point", property:"Web Point", value:"(0,0)"},
                {id:"viewport_point", property:"Viewport Point", value:"(0,0)"},
        				{id:"image_point", property:"Image Point", value:"(0,0)"},
        				{id:"zoom", property:"Zoom", value:"1"},
                {id:"image_zoom", property:"Image Zoom", value:"1"},
                {id:"vertex1", property:"Vertex 1", value:"(0,0)"},
                {id:"vertex2", property:"Vertex 2", value:"(0,0)"},
                {id:"vertex3", property:"Vertex 3", value:"(0,0)"},
                {id:"vertex4", property:"Vertex 4", value:"(0,0)"},
                {id:"vertex5", property:"Vertex 5", value:"(0,0)"},
                {id:"vertex6", property:"Vertex 6", value:"(0,0)"},
                {id:"vertex7", property:"Vertex 7", value:"(0,0)"},
                {id:"vertex8", property:"Vertex 8", value:"(0,0)"},
                {id:"vertex9", property:"Vertex 9", value:"(0,0)"},
                {id:"vertex10", property:"Vertex 10", value:"(0,0)"},
                {id:"vertex11", property:"Vertex 11", value:"(0,0)"},
                {id:"vertex12", property:"Vertex 12", value:"(0,0)"}
    				]
     			
};


clickHandler = function(){
  

  if (this.data.label == "SB2"){
    var p = new OpenSeadragon.Point(0.1,0.1);
    viewer.viewport.panTo(p);
    viewer.viewport.zoomTo(5);
  } else if (this.data.label == "SB3") {
    var p = new OpenSeadragon.Point(0.55,0.1);
    viewer.viewport.panTo(p);
    viewer.viewport.zoomTo(5);
  } else if (this.data.label == "CTRL1") {
    var p = new OpenSeadragon.Point(0.93,0.14);
    viewer.viewport.panTo(p);
    viewer.viewport.zoomTo(5);
  } else if (this.data.label == "CTRL3") {
    var p = new OpenSeadragon.Point(0.17,0.35);
    viewer.viewport.panTo(p);
    viewer.viewport.zoomTo(5);
  } else if (this.data.label == "CTRL4") {
    var p = new OpenSeadragon.Point(0.52,0.37);
    viewer.viewport.panTo(p);
    viewer.viewport.zoomTo(5);
  } else {
    var p = new OpenSeadragon.Point(0.9,0.43);
    viewer.viewport.panTo(p);
    viewer.viewport.zoomTo(5);

  }
}

group = {cols: [{view:"button", label:"Group"}, {view:"button", label:"UnGroup"}]};

group2 = {rows: 
			[
				{cols: [{view:"button", label:"SB2", click: clickHandler}, {view:"button", label:"SB3", click: clickHandler}, {view:"button", label:"CTRL1", click: clickHandler}]}, 
				{cols: [{view:"button", label:"CTRL3", click: clickHandler}, {view:"button", label:"CTRL4", click: clickHandler}, {view:"button", label:"RN1", click: clickHandler}]}
		]};

group3 = {rows: 
			[
				{cols: [{view:"button", label:"TB1"}, {view:"button", label:"TB2"}, {view:"button", label:"TB3"}]}, 
				{cols: [{view:"button", label:"TB5"}, {view:"button", label:"HF"}, {view:"button", label:"HF"}]}
		]};



button1 = {
    view: "button",
    label: "Draggable",
    on: {
        'onItemClick': function(id, e) {
     
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




		canvas = overlay.canvas;
    overlay.canvas.add(group);




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
      radius: 2000, fill: 'green', lockScalingX: true, lockScalingY: true, left: leftCorner, top: topCorner
  });
  canvas.add(circle1);

  var circle2 = new fabric.Circle({
      radius: 2000, fill: 'green', lockScalingX: true, lockScalingY: true, left: leftCorner2, top: topCorner
  });
  canvas.add(circle2);

  var circle3 = new fabric.Circle({
      radius: 2000, fill: 'green', lockScalingX: true, lockScalingY: true, left: leftCorner3, top: topCorner
  });
  canvas.add(circle3);

  var circle4 = new fabric.Circle({
      radius: 2000, fill: 'green', lockScalingX: true, lockScalingY: true, left: leftCorner4, top: topCorner
  });
  canvas.add(circle4);

  var circle5 = new fabric.Circle({
      radius: 2000, fill: 'green', lockScalingX: true, lockScalingY: true, left: leftCorner, top: topMiddle
  });
  canvas.add(circle5);

  var circle6 = new fabric.Circle({
      radius: 2000, fill: 'green', lockScalingX: true, lockScalingY: true, left: leftCorner2, top: topMiddle
  });
  canvas.add(circle6);

  var circle7 = new fabric.Circle({
      radius: 2000, fill: 'green', lockScalingX: true, lockScalingY: true, left: leftCorner3, top: topMiddle
  });
  canvas.add(circle7);

  var circle8 = new fabric.Circle({
      radius: 2000, fill: 'green', lockScalingX: true, lockScalingY: true, left: leftCorner4, top: topMiddle
  });
  canvas.add(circle8);

  var circle9 = new fabric.Circle({
      radius: 2000, fill: 'green', lockScalingX: true, lockScalingY: true, left: leftCorner, top: topTop
  });
  canvas.add(circle9);

  var circle10 = new fabric.Circle({
      radius: 2000, fill: 'green', lockScalingX: true, lockScalingY: true, left: leftCorner2, top: topTop
  });
  canvas.add(circle10);

  var circle11 = new fabric.Circle({
      radius: 2000, fill: 'green', lockScalingX: true, lockScalingY: true, left: leftCorner3, top: topTop
  });
  canvas.add(circle11);

  var circle12 = new fabric.Circle({
      radius: 2000, fill: 'green', lockScalingX: true, lockScalingY: true, left: leftCorner4, top: topTop
  });
  canvas.add(circle12);
}//end drawCircle





    drawCircle(group.top, group.left, group.height, group.width);



    //viewer.addHandler('open', function() {

        var tracker = new OpenSeadragon.MouseTracker({
            element: viewer.container,
            moveHandler: function(event) {
                var webPoint = event.position;
                var viewportPoint = viewer.viewport.pointFromPixel(webPoint);
                var imagePoint = viewer.viewport.viewportToImageCoordinates(viewportPoint);
                var zoom = viewer.viewport.getZoom(true);
                var imageZoom = viewer.viewport.viewportToImageZoom(zoom);

                // document.getElementById("position").innerHTML = 'Web:<br>' + webPoint.toString() + 
                //     '<br><br>Viewport:<br>' + viewportPoint.toString() +
                //     '<br><br>Image:<br>' + imagePoint.toString() + '<br><br>Zoom:<br>' + (Math.round(zoom * 100) / 100) + 
                // '<br><br>Image Zoom:<br>' + (Math.round(imageZoom * 100) / 100); 

                
                $$("metatable").updateItem("web_point", {value: webPoint.toString()});
                $$("metatable").updateItem("image_point", {value: imagePoint.toString()});
                $$("metatable").updateItem("viewport_point", {value: viewportPoint.toString()});

                $$("metatable").updateItem("zoom", {value: (Math.round(zoom * 100) / 100)});
                $$("metatable").updateItem("image_zoom", {value: (Math.round(imageZoom * 100) / 100)});


              // document.getElementById("coord").innerHTML = "";

              // for (i = 1; i<=12; i+=1){
              //   document.getElementById("coord").innerHTML += 'Vertex' + i + '<br>(' + parseFloat(canvas.getObjects()[i].left + 2000) + ',' + parseFloat(canvas.getObjects()[i].top + 2000) + ')<br><br>';
              // } 
              if (typeof canvas.getObjects()[1] != "undefined"){
                for (i = 1; i<=12; i+=1){
                    var valx = Math.round(parseFloat(canvas.getObjects()[i].left + 2000)*100) / 100;
                    var valy = Math.round(parseFloat(canvas.getObjects()[i].top + 2000)*100) / 100;
                    $$("metatable").updateItem("vertex" + i, {value: "( " + valx + "," + valy + " )"});
                } //endfor
              }
                 


            }// end moveHandler
        }); //end MouseTracker
  //}
//); 







        } //onItemClick
    } //on
}; //button


// var slideSelect = { cols:[
//     { id: "tree", view:"button", label:"Prev", type: "prev", autowidth:true, click: filter_tree},
//     {},
//     { view:"button", label:"Next", type: "next", autowidth:true, click: filter_tree}
//     ]
//   }


 var thumbPager = {
        view:"pager",
        id: "thumbPager",
        template: "<center>{common.prev()}{common.page()}/#limit# images{common.next()}</center>",
        animate:true,
        size:1,
        group:1,
        on:{
      onItemClick: function(id, event, node){
                //http://webix.com/snippet/e00b0728
          // delay is necessary for getting the needed page
            webix.delay(function(){
              var page = $$("thumbnails_panel").getPage();                   
              var id = $$("thumbnails_panel").getIdByIndex(page);
              //imageName = $$("thumbnails_panel").getItem(id).name.replace(".jpg", "");
              //selectImage(imageName);
            })
        }
    }
};






    //slides panel is the left panel, contains two rows 
    //containing the slide group dropdown and the thumbnails panel 
   
      
    slidesPanel = {
        id: "slidenav_panel",
        header: "Slides",
        headerAlt: "Expand the view",
        body: {
            rows: [
                 dropdown, thumbPager, thumbnailsPanel, filter, scroll, group, button1,group2,{height:10}, group3, {id: "myButton", view:"button", label:"Clear", click:"myfunc"}
            ]
        },
        width: 220
    };

myfunc = function(){
           // webix.message("Test"); 
          if(typeof canvas != "undefined")
            canvas.clear();           
        }
   

  

   
    return {
        view: slidesPanel
    }
});
