/*global MusicSearch, Backbone, JST*/

MusicSearch.Views = MusicSearch.Views || {};

(function () {
    'use strict';

    MusicSearch.Views.TopNav = Backbone.View.extend({

        template: JST['app/scripts/templates/topNav.ejs'],

        tagName: 'header',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            var $header = this.render();
            $('body').prepend($header.el);
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
