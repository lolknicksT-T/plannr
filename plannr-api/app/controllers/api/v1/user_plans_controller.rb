module Api::V1
  class UserPlansController  < ApplicationController

    def create
      @user = User.find(params[:user_id])
      @plan = Plan.find(params[:plan_id])
      @userplan = UserPlan.create(user: @user, plan: @plan)
      render json: @userplan
    end

  end

end
