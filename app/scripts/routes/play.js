/*global MusicSearch, Backbone*/

MusicSearch.Routers = MusicSearch.Routers || {};

(function () {
    'use strict';

    MusicSearch.Routers.Play = Backbone.Router.extend({
        routes: {
            'play/:url': 'playRoute'
        },

        playRoute: function(url){
            var MusicPlayer = new MusicSearch.Views.Player();

            $(".container").html(MusicPlayer.render(url).el);
        }
    });

})();
