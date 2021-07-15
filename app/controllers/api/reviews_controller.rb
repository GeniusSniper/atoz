class Api::ReviewsController < ApplicationController
  before_action :require_logged_in
  
  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def edit
    @review = current_user.reviews.find_by(id: params[:id])
    if @review
      render json: ['worked'], status: 200
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def update
    @review = current_user.reviews.find_by(id: params[:id])
    if @review && @review.update(review_params)
      render json: ['updated'], status: 200
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = current_user.reviews.find_by(id: params[:id])
    if @review && @review.destroy
      render json: ['deleted'], status: 200
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:rating, :body, :item_id)
  end
end
