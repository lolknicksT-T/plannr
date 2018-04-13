module Api::V1
  class UsersController < ApplicationController

    # def create
    #   @user = User.new(user_params)
    #   if @user.save
    #     render json: { user_token: token_for(@user)}
    #   else
    #     render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    #   end
    # end

    def create

      # @user = User.new(username: params[:user][:username], password: params[:user][:password])
      @user = User.new(user_params)
      byebug
      if @user.save
        render json: { id: @user.id, username: @user.username}
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.require(:user).permit(:username, :password)
    end



  end


end
