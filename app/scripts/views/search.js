/*global MusicSearch, Backbone, JST*/

MusicSearch.Views = MusicSearch.Views || {};

(function () {
    'use strict';

    MusicSearch.Views.Search = Backbone.View.extend({

        template: JST['app/scripts/templates/search.ejs'],

        el: '#music-search',

        events: {
            'submit' : 'searchSongs'
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template());

            return this;
        },

        searchSongs: function(event){
            event.preventDefault();

            console.log("searching for songs");
        }

    });

})();
