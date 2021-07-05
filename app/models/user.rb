class User < ApplicationRecord

    attr_reader :password, :cart
    attr_accessor :email, :address
  
    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
  
    after_initialize :ensure_session_token # a user must have a session token 
  
    def self.find_by_credentials(username, password) # finding the user by username and password 
      user = User.find_by(username: username)
      return nil unless user
      user.is_password?(password) ? user : nil
    end
  
    def password=(password)
      @password = password # setting the new password to the user
      self.password_digest = BCrypt::Password.create(password) # creating a password digest for securty for the user
    end
  
    def is_password?(password) #checking if the password the user give matches the password for the account
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
  
    def reset_session_token! #used for log out a user
      generate_unique_session_token
      save!
      self.session_token
    end

    def total_amount
        @cart.inject { |acc, i| acc.price += i}
  
    def add_item(item)
        @cart ||= []
        @cart.push(item)
    end

    def purchase
        @cart = []
    end

    private
    def ensure_session_token
      generate_unique_session_token unless self.session_token #need to have a session token, session token can't be nil
    end
  
    def new_session_token
      SecureRandom.urlsafe_base64 #getting a new session token
    end
  
    def generate_unique_session_token
      self.session_token = new_session_token # setting the session token so session token wont be nil
      while User.find_by(session_token: self.session_token) # checking if the session token is unique if it is get a new one
        self.session_token = new_session_token
      end
      self.session_token #return the new session token
    end
end
  