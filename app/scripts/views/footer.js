/*global MusicSearch, Backbone, JST*/

MusicSearch.Views = MusicSearch.Views || {};

(function () {
    'use strict';

    MusicSearch.Views.Footer = Backbone.View.extend({

        template: JST['app/scripts/templates/footer.ejs'],

        tagName: 'footer',

        initialize: function () {
            var $footer = this.render();
            $('body').append($footer.el);
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
