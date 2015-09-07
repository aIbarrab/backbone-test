/*global MusicSearch, Backbone, JST*/

MusicSearch.Views = MusicSearch.Views || {};

(function () {
    'use strict';

    MusicSearch.Views.Search = Backbone.View.extend({

        template: JST['app/scripts/templates/search.ejs'],

        el: '#music-search',

        events: {
            'submit' : 'searchSongs',
            'click .input-group-addon .glyphicon': 'searchSongs',
            'click .play-btn a': 'openSpotify',
            'click .radio-btn': 'checkRadio'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());

            return this;
        },

        searchSongs: function(event) {
            event.preventDefault();

            var queryText = this.$("#query").val();

            var SearchResults = new MusicSearch.Views.Songs({
                collection: new MusicSearch.Collections.Song([], {query: queryText})
            });

            this.$('#search-results')
                .html(SearchResults.render().el)
                .hide()
                .fadeIn(500);

            console.log("searching for songs");
        },


        checkRadio: function(event){
            var $radioBtn = this.$(event.currentTarget),
                className = 'checked';

            if(!$radioBtn.hasClass(className)){
                $radioBtn.parent().children('.' + className).removeClass(className);
                $radioBtn.addClass(className);
            }
        },

        openSpotify: function(event){
            event.preventDefault();

            var $element = this.$(event.currentTarget);

            console.log($element);

            window.open(
                $element.attr('href'),
                'winname',
                "directories=0," +
                "titlebar=0," +
                "toolbar=0," +
                "location=0," +
                "status=0," +
                "menubar=0," +
                "scrollbars=no," +
                "resizable=no," +
                "width=330," +
                "height=400"
            );
        }

    });

})();
