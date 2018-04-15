module Api::V1
  class UserPlansController  < ApplicationController

    def create
      @user = User.find(params[:user_id])
      @plan = Plan.find(params[:plan_id])
      userplan = UserPlan.find_by(plan: @plan)

      if userplan
        @userplan = UserPlan.new(user: @user, plan:@plan, admin_id: 0)
      else
        @userplan = UserPlan.new(user: @user, plan:@plan, admin_id: @user.id)
      end

      if @userplan.save
        render json: @userplan
      else
        render json: {errors: @userplan.errors.full_messages}, status: :unprocessable_entity
      end

    end

    private

    def user_plans_params
      params.require(:userplan).permit(:user_id, :plan_id)
    end
  end
end
