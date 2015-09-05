/*global MusicSearch, $*/


window.MusicSearch = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        new  this.Views.Search();
    }
};

$(document).ready(function () {
    'use strict';
    MusicSearch.init();
});
