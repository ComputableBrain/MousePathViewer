require = {
    urlArgs: "bust=" + (+new Date),
    paths: {
        "d3": "bower_components/d3/d3.min",
        "pubsub": "bower_components/PubSubJS/src/pubsub",
        "osd": "bower_components/openseadragon/built-openseadragon/openseadragon/openseadragon",
        "webix": "bower_components/webix/codebase/webix",
        "jquery": "bower_components/jquery/dist/jquery",
        "scalebar": "lib/openseadragon-scalebar",
        "config": "app/config",
        "zoomer": "app/zoomer",
        "slide": "app/slide",
        "app": "app/app"
    },

    packages: [{
        name: "ui",
        location: "app/ui"
    }],

    shim: {
        "scalebar": ["osd"]     
    }
};