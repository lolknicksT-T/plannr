module Api::V1
  class UserPlansController  < ApplicationController

    def create
      @user = User.find(params[:user_id])
      @plan = Plan.find(params[:plan_id])
      @userplan = UserPlan.new(user: @user, plan:@plan)

      if @userplan.save
        render json: @userplan
      else
        render json: {errors: @userplan.errors.full_messages}, status: :unprocessable_entity
      end
    end

    def find
      @user = User.find(params[:user_id])
      @plan = Plan.find(params[:plan_id])
      @userplan = UserPlan.find_by(user: @user, plan: @plan)
      render json: @userplan
    end

    def destroy
      @userplan = UserPlan.find(params[:id])
      @userplan.destroy
    end

    private

    def user_plans_params
      params.require(:userplan).permit(:user_id, :plan_id)
    end
  end
end
