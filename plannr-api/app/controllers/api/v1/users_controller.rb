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
      @user = User.new(user_params)
      if @user.save
        byebug
        render json: { id: @user.id, username: @user.username}
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation)
    end



  end


end
