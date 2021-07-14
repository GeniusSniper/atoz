class Api::ItemsController < ApplicationController
    def index
        @items = Item.with_attached_photo.all
    end

    def show
        @item = Item.find(params[:id])
    end
end
