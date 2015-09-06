/*global MusicSearch, Backbone*/

MusicSearch.Collections = MusicSearch.Collections || {};

(function () {
    'use strict';

    MusicSearch.Collections.Song = Backbone.Collection.extend({

        initialize: function(models, options){
            this.query = options.query;
        },

        model: MusicSearch.Models.Song,

        url: function(){
            return 'http://localhost:3000/songs?q=' + this.query;
        }

    });

})();
