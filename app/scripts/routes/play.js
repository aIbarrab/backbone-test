/*global MusicSearch, Backbone*/

MusicSearch.Routers = MusicSearch.Routers || {};

(function () {
    'use strict';

    MusicSearch.Routers.Play = Backbone.Router.extend({
        routes: {
            'play/:url': 'playRoute',
            '': 'addClouds'
        },

        playRoute: function(url){
            var MusicPlayer = new MusicSearch.Views.Player();

            $(".container").html(MusicPlayer.render(url).el);
        },

        addClouds: function(){
            new MusicSearch.Views.TopNav();
            new MusicSearch.Views.Clouds();
            new MusicSearch.Views.Footer();
        }
    });

})();
