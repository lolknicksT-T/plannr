module Api::V1
  class PlansController < ApplicationController

    def index
      render json: Plan.all
    end

    def show
      @plan = Plan.find(params[:id])
      joined_users = UserPlan.select{|userplan| userplan.plan_id == @plan.id}
      @joined_usernames = joined_users.map{|userplan| User.find(userplan.user_id).username}
      render json: {plan: @plan, joined_users: @joined_usernames}
    end

    def create
      @plan = Plan.new(plans_params)
      if @plan.save
        render json: @plan
      else
        render json: {errors: @plan.errors.full_messages}, status: :unprocessable_entity
      end
    end

    def update
    end

    def my_plans
      user_plans = UserPlan.select{|plan| plan.user_id.to_s == params[:user_id]}
      @plans = []
      user_plans.each{|plan| @plans << Plan.find(plan.plan_id)}
      if @plans
        render json: @plans
      else
        render json: true, :status => :not_found
      end
    end

    def past_plans
    end

    private

    def plans_params
      params.require(:plan).permit(:title, :description, :location, :date_time, :admin_id)
    end
  end
end
