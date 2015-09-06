/*global MusicSearch, Backbone, JST*/

MusicSearch.Views = MusicSearch.Views || {};

(function () {
    'use strict';

    MusicSearch.Views.Songs = Backbone.View.extend({

        template: JST['app/scripts/templates/songs.ejs'],

        tagName: 'li',

        events: {},

        initialize: function () {
            //this.listenTo(this.collection, 'change', this.render);
            //this.listenTo(this.collection, 'reset', this.reset);
        },

        render: function () {
            var that = this;

            this.$el.html(this.template({collection: this.collection.fetch({
                success: function(){
                    console.log(that.collection.toJSON());
                    that.$el.html(that.template({collection: that.collection.toJSON()}));
                }
            })}));

            return this;
        }

    });

})();
