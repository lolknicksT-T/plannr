module Api::V1
  class ConversationsController < ApplicationController

    def show
    end

    def create
      @plan = Plan.find(params[:plan_id])
      @conversation = Conversation.new(title: params[:title], plan: @plan)
      if @conversation.save
        render json: @conversation
      else
        render json: {errors: @conversation.errors.full_messages}, status: :unprocessable_entity
      end
    end

    private

    def conversation_params
      params.require(:conversation).permit(:title, :plan_id)
    end
  end
end
