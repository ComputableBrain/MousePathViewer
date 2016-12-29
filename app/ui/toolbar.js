define("ui/toolbar", ['pubsub'] ,  function(pubsub, aperio) {

    slide = null;
    pubsub.subscribe("SLIDE", function(msg, data) {
        slide = data;
    });

    buttons = {
        height: 30,
        cols: [{
            id: "apply_filter_btn",
            label: "Apply Filters",
            view: "button",
            click: ("$$('filters_window').show();")
        }, {
            id: "metadata_btn",
            label: "Metadata",
            view: "button",
            click: ("$$('metadata_window').show();")
        }
	]
    }

//    function loadAnnotations() {
//        $$('aperio_window').show();
//    }

    return {
        buttons: buttons
    }
});
