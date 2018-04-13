module Api::V1
  class UserPlansController  < ApplicationController

    def index
      @user = User.find_by(id: params[:user_id])
      if @user
        render json: @user.plans
      else
        render json: true, :status => :not_found
      end
    end

    def show
    end

  end


end
