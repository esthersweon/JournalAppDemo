window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // Phase I/II
    // // very common to have a top-level instance of collections
    // JournalApp.posts = new JournalApp.Collections.Posts();
    // var indexView = new JournalApp.Views.PostsIndex({
    //   collection: JournalApp.posts
    // });
    //
    // $("#content").html(indexView.render().$el);
    //
    // // fetch 'em down!
    // JournalApp.posts.fetch();

    JournalApp.posts = new JournalApp.Collections.Posts();

    new JournalApp.Routers.Posts({
      "$rootEl": $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
