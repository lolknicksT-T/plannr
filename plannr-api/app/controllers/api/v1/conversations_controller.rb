module Api::V1
  class ConversationsController < ApplicationController

    def show
      @conversation = Conversation.find(params[:id])
      render json: @conversation
    end

    def create
      @plan = Plan.find(params[:plan_id])
      @conversation = Conversation.new(title: params[:title], plan: @plan)
      if @conversation.save
        serialized_data = ActiveModelSerializers::Adapter::Json.new(
          ConversationSerializer.new(@conversation)
        ).serializable_hash
        ActionCable.server.broadcast 'conversations_channel', serialized_data
        head :ok
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
