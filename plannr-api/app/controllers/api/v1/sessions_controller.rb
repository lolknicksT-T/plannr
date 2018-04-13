module Api::V1
  class SessionsController < ApplicationController

    def create
      @user = User.find_by(username: params[:username])

      if @user && @user.authenticate(params["password"])
        render json: { user_token: token_for(@user) }
      else
        render json: { errors: "invalid credentials"}, :status => :unprocessable_entity
      end
    end

    def destroy
    end


    private

    def sessions_params
    end



  end


end
