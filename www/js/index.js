var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
		if ("cordova" in window) {
    		document.addEventListener('deviceready', this.onDeviceReady, false);
		} else {
    		app.onDeviceReady();
		}        
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        $('#modalInfo').modal('show');
        console.log('Received Event: ' + id);
    }
};

app.initialize();