class SessionsController < ApplicationController
    # login
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user 
        else
            render json: {errors: session.errors.full_messages}, status: :unauthorized
        end
    end
    
    # logout
    def destroy
        session.clear
    end

    # private

    # def user_params

    # end

end
