class MessageSerializer < ActiveModel::Serializer
  attributes :id, :conversation_id, :content, :user, :created_at
end
