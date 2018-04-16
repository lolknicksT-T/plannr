class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :title, :plan
  has_many :messages
end
