module Api::V1
  class MessagesController  < ApplicationController

    def create
    end

    private

    def messages_params
      params.require(:conversation).permit(:content, :conversation)
    end
  end
end
