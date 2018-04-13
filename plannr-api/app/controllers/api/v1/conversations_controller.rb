module Api::V1
  class ConversationsController < ApplicationController

    def show
    end

    def create
    end

    private

    def conversation_params
      params.require(:conversation).permit(:title, :plan)
    end

  end


end
