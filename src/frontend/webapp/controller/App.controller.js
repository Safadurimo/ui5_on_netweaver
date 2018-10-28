sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ui5_on_netweaver.controller.App", {
		
		handleSubmit : function () {
			
			var oView = this.getView();
				
			$.ajax("/sap/bc/zmb_add_one/result.json", { dataType: "json", cache: false })
            .done(function (data) {
            	
            	var oModel = new JSONModel(data);
				oView.setModel(oModel);
                
            });
			
		},
	});
});
