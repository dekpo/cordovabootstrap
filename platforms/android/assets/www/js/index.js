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
					function toogleStatusBar() {
							if (StatusBar.isVisible) {
							StatusBar.hide();
							console.log('cordova-plugin-statusbar StatusBar.hide()');
							} else {
							StatusBar.show();
							console.log('cordova-plugin-statusbar StatusBar.show()');
							}
						}
						toogleStatusBar();
						
						$('#toogleButton').click(function() {
  						toogleStatusBar();
						});
						
					}	
				
		});
					
					
    }
};

app.initialize();