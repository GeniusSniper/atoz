class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in? #helper mthod for the render
  
    private
    def current_user # finding the current user by the session token or if the current user already logged in
      return nil unless session[:session_token]
      @current_user ||= User.find_by(session_token: session[:session_token])
    end
  
    def logged_in? #checking if a user is logged in
      !!current_user
    end
  
    def login(user) # setting the current user when the user log in
      user.reset_session_token!
      session[:session_token] = user.session_token
      @current_user = user
    end
  
    def logout #chaging the session token and reset the session, session token and current user to nil to log out a user
      current_user.reset_session_token!
      session[:session_token] = nil
      @current_user = nil
    end
  
    def require_logged_in
      unless current_user
            render json: { base: ['invalid credentials'] }, status: 401
      end
    end
end
  