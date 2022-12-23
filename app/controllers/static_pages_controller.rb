class StaticPagesController < ApplicationController; ActionController::Base
  def root #render the root.html.erb in static pages
  end

  def frontend_index
    render file: Rails.root.join('public', 'index.html')
  end
end