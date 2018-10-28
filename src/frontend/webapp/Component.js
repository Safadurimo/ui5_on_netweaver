sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("ui5_on_netweaver.Component", {
            metadata : {
		rootView: {
			"viewName": "ui5_on_netweaver.view.App",
			"type": "XML",
			"async": true,
			"id": "app"
		}
	},
      init : function () {
      	
         UIComponent.prototype.init.apply(this, arguments);

      }
   });
});