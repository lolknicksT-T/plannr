module Api::V1
  class PlansController < ApplicationController

    def index
    end

    def show
    end


    def create
    end

    def update
    end

    def my_plans
    end

    def past_plans
    end

    private

    def plans_params
      params.require(:plan).permit(:title, :user)
    end


  end


end
