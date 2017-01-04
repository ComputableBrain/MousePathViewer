define("ui/main", ["ui/header", "ui/tabby", "ui/filters", "ui/slidenav", "ui/toolbar", "ui/metadata", "webix"], function(header, tabby, filters, slidenav, toolbar, metadata) {

    function init() {
        filters.init();
		

        webix.ui(metadata.view);

        webix.ui({
            view: "window",
            head: {
                view: "toolbar",
                margin: -4,
                cols: [{
                    view: "label",
                    label: "Share Link"
                }, {
                    view: "icon",
                    icon: "times-circle",
                    click: "$$('share_link_window').hide();"
                }]
            },
            position: "center",
            id: "share_link_window",
            body: {
                view: "form",
                width: 400,
                elements: [{
                    id: "link_to_share",
                    view: "textarea",
                    labelAlign: "top",
                    height: 50
                }]
            }
        });

        webix.ui({
            container: "main_layout",
            id: "root",
            rows: [
                header.view, tabby.view
            ]
        });

    }

    return {
        init: init
    }
});
