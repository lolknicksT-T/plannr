module Api::V1
  class MessagesController < ApplicationController
    def create
      message = Message.new(messages_params)
      conversation = Conversation.find(messages_params[:conversation_id])
      if message.save
        serialized_data = ActiveModelSerializers::Adapter::Json.new(
          MessageSerializer.new(message)
        ).serializable_hash
        MessagesChannel.broadcast_to conversation, serialized_data
        head :ok
      end
    end

    private

    def messages_params
      params.require(:message).permit(:content, :conversation_id, :user_id)
    end
  end
end
