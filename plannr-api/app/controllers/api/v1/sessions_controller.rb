module Api::V1
  class SessionsController < ApplicationController

    # def create
    #   @user = User.find_by(username: params[:username])
    #
    #   if @user && @user.authenticate(params["password"])
    #     render json: { user_token: token_for(@user) }
    #   else
    #     render json: { errors: "invalid credentials"}, :status => :unprocessable_entity
    #   end
    # end

    def create
      @user = User.find_by(username: params[:session][:username])
      if @user && @user.authenticate(params[:session][:password])
        render json: { id: @user.id, username: @user.username }
      else
        render json: { errors: "invalid credentials"}, :status => :unprocessable_entity
      end
    end

    def destroy
    end

    private

    # def sessions_params
    #   params.require(:sessions).permit(:username, :password)
    # end

  end
end
