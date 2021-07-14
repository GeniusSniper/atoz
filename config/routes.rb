Rails.application.routes.draw do
  namespace :api do
    get 'reviews/create'
    get 'reviews/delete'
    get 'reviews/update'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :items, only: [:show, :index]
    resources :reviews, only: [:create, :delete, :edit]
  end
  root to: 'static_pages#root' # for path '/' to the root static page controller root function
end
