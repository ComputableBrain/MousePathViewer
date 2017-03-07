define("slide", ["pubsub", "config", "overlay", "jquery","zoomer", "fabricjs", "webix"], function(pubsub, config, overlay, $, viewer, fabricjs) {
	//console.log(overlay);
    var slide = {
        aBtn: null,
        mTable: null,
        //aTable: null,
        iTable: null,
        lBox: null,
        files: null,

		//Zoom and coords are used for sharing a link to a slide and uses routes; Item comes from GIRDER
        init: function(item) {
            $.extend(this, item);
            var itemId = this._id;
          
            // this.zoom = zoom;
            // this.pan = coords;
            // this.aBtn = $$("aperio_import_btn");
            

            $.ajax({
                context: this,
                url: config.BASE_URL + "/item/" + itemId + "/tiles",
                success: this.initViewer
            });

            // this.getFiles();
            // this.keyvalue();
            // this.initDataViews();

            // pubsub.publish("SLIDE", this);
            //console.log(item);
            if (typeof item.meta != "undefined"){
                $$("image_metadata_table").updateItem("coord", {value: item.meta.coords});
            }
            //console.log($$("image_metadata_table"));
            return this;
        },

        initViewer: function(tiles) {
            itemId = this._id;
			//console.log("hello");
            this.tiles = tiles;
            // zoom = this.zoom;
            // pan = this.pan;
            // sharedUrl = config.HOST_URL + "/#item/" + this._id;

            tileSource = {
                width: tiles.sizeX,
                height: tiles.sizeY,
                tileWidth: tiles.tileWidth,
                tileHeight: tiles.tileHeight,
                minLevel: 0,
                maxLevel: tiles.levels - 1,
                getTileUrl: function(level, x, y) {
                    return config.BASE_URL + "/item/" + itemId + "/tiles/zxy/" + level + "/" + x + "/" + y;
                }
            };

            // pubsub.publish("SLIDE", this);
			
		
            viewer.open(tileSource);

            return this;
        }

        }

    return slide;
});
