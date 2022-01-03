class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    # login
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user 
        else
            # byebug
            render json: {error: "Invalid Login Credentials"}, status: :unauthorized
        end
    end
    
    # logout
    def destroy
        session.clear
    end


end
