/*global MusicSearch, Backbone, JST*/

MusicSearch.Views = MusicSearch.Views || {};

(function () {
    'use strict';

    MusicSearch.Views.Player = Backbone.View.extend({

        template: JST['app/scripts/templates/player.ejs'],

        tagName: 'div',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function (url) {
            this.$el.html(this.template({url: url}));
            return this;
        }

    });

})();
