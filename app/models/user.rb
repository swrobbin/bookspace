class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :password, presence: true
    validates :password_confirmation, presence: true
    
    has_many :books
end
