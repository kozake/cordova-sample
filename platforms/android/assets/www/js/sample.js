var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {

        document.getElementById("sample1").addEventListener("click", function(e) {
          navigator.app.loadUrl(
            'http://www.sakai.zaq.ne.jp/dujms904/snakerof/',
            {wait:0, loadingDialog:"Wait,Loading App", loadUrlTimeoutValue: 60000, openexternal: false})
        })
    }
};

app.initialize();
