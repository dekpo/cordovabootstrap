﻿var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
		if ("cordova" in window) {
    		document.addEventListener('deviceready', this.onDeviceReady, false);
		} else {
    		app.receivedEvent('Device ready from browser !');
		}        
    },
    onDeviceReady: function() {
        app.receivedEvent('Device ready from app !');
    },
    receivedEvent: function(str) {	
	
		var info = str;
		
		$(function() {
				   
			$('#modalInfo').modal('show');
			
				$('#modalInfo').on('shown.bs.modal', function () {
				$('#modalInfo div.modal-body').html(info);
				console.log('Received Event: ' + info); 	
				});		
				
		});
		
		//cordova-plugin-statusbar
				if (StatusBar) {
					console.log('cordova-plugin-statusbar ok');
					if (StatusBar.isVisible) {
					StatusBar.hide();
					console.log('cordova-plugin-statusbar StatusBar.hide()');
					}
					
					
				}
    }
};

app.initialize();