sap.ui.define([
	"sap/ui/core/util/MockServer"
], function(MockServer) {
	"use strict";

	return {
		/**
		 * @public
		 */
		init: function() {
			// create
			var sPath = jQuery.sap.getModulePath("ui5_on_netweaver.localService");
			
			var oMockServer = new sap.ui.core.util.MockServer({
                rootUri: "",
                requests: [
                    { method: "GET", path: "/sap/bc/zmb_add_one/result\.json.*", 
                    	response: function (xhr) { xhr.respondFile(200, {}, sPath + "/mockdata.json"); } }
                ]
            });

			// start
			oMockServer.start();

			jQuery.sap.log.info("Running the app with mock data");
		}

	};

});