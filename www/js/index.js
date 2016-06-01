var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
		//if ("cordova" in window) {
    		document.addEventListener('deviceready', this.onDeviceReady, false);
		//} else {
    		//app.receivedEvent('Device ready from browser !');
		//}        
    },
    onDeviceReady: function() {
        app.receivedEvent('Device ready from app !');
    },
    receivedEvent: function(str) {	
	
		var info = str;
		
		$(function() {
				   
			//$('#modalInfo').modal('show');
			
				$('#modalInfo').on('shown.bs.modal', function () {
				$('#modalInfo div.modal-body').html(info);
				console.log('Received Event: ' + info); 	
				});
				
			//cordova-plugin-statusbar
				if (StatusBar) {
					$.each(StatusBar,function(key,value) {
					console.log(key+':'+value);
					 });
					console.log('cordova-plugin-statusbar ok');
					function toggleStatusBar() {
							if (StatusBar.isVisible) {
							StatusBar.hide();
							console.log('cordova-plugin-statusbar StatusBar.hide()');
							} else {
							StatusBar.show();
							console.log('cordova-plugin-statusbar StatusBar.show()');
							}
						}
						toggleStatusBar();
						
						$('#toggleButton').click(function() {
  						toggleStatusBar();
						});
						$('#virtualTourHtml').click(function() {
  						cordova.InAppBrowser.open('http://krpano.com/tours/corfu/?html5=prefer', '_blank', 'location=no')
						})
						$('#virtualTourAuto').click(function() {
  						cordova.InAppBrowser.open('http://krpano.com/tours/corfu', '_blank', 'location=no')
						})
						$('#virtualTourFlash').click(function() {
  						cordova.InAppBrowser.open('http://krpano.com/tours/corfu/?flash=prefer', '_blank', 'location=no')
						})
					}	
				
		});
					
					
    }
};

app.initialize();