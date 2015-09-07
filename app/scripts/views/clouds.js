/*global MusicSearch, Backbone, JST*/

MusicSearch.Views = MusicSearch.Views || {};

(function () {
    'use strict';

    MusicSearch.Views.Clouds = Backbone.View.extend({

        template: JST['app/scripts/templates/clouds.ejs'],

        tagName: 'div',

        className: 'clouds',

        initialize: function(){
            var html = this.render();
            $("body").prepend(html.el);
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
