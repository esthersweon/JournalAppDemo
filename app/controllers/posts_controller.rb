class PostsController < ApplicationController
  respond_to :json

  def create
    @post = Post.new(params[:post])
    @post.save!

    render :json => @post
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    render :json => nil
  end

  def index
    @posts = Post.all
    render :json => @posts
  end

  def show
    @post = Post.find(params[:id])
    render :json => @post
  end

  def update
    @post = Post.find(params[:id])
    @post.update_attributes!(params[:post])
    render :json => @post
  end
end
