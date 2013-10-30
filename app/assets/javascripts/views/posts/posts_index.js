JournalApp.Views.PostsIndex = Backbone.View.extend({
  events: {
    "click .delete": "destroyPost"
  },

  template: JST['posts/index'],

  initialize: function () {
    var that = this;

    var events = ["add", "change:title", "remove", "reset"];
    _(events).each(function (event) {
      that.listenTo(that.collection, event, that.render);
    });
  },

  destroyPost: function (event) {
    var $target = $(event.target);
    var post = this.collection.get($target.attr("data-id"));

    post.destroy();
  },

  render: function () {
    var renderedContent = this.template({
      posts: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  }
});
